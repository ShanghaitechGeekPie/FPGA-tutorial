## 闪烁的LED 
```verilog
module HelloWorld(
    input wire clk_in,
    output wire OnBoardLED
    );
    reg [21:0] freq_div;
	assign OnBoardLED= freq_div[21];
	always @(posedge clk_in) begin
		freq_div <= freq_div + 1'd1;
	end
endmodule
```
在引言中提及，FPGA的出现是因为设计大规模数字电路的需求。为了描述大规模的数字电路，人们研发出硬件描述语言（HDL）如Verilog、VHDL。 

我们现在不知道如何去写，但并不妨碍我们来看看它的每一行是什么意思。
```verilog
module HelloWorld(
    input wire clk_in,
    output wire OnBoardLED
    );
```
在代码的开始定义了这个模块的输入与输出。这个模块的输入名为clk_in，输出名为OnBoardLED。这里输入输出的类型都为Wire，由于Verilog是硬件描述语言，**它代表着一个电路**。这里的Wire对应着电路的一条线。clk是clock的缩写，连接着外部的晶振。晶振可以提供一个周期性的方波，它的电压随时间变化的波形如下。在数字电路中，我们不关心具体的电压，而是将低电压称为0，高电压称为1。于是晶振可以看作在0与1间反复变化。OnBoardLED连接着板载LED。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/方波.png)
```verilog
reg [21:0] freq_div;
assign OnBoardLED= freq_div[21];
```
接下来的一行代码定义了一个22位的寄存器（Reg）。寄存器是什么将在之后解释，如果你学习过任意编程语言，在此你可以将它理解为一个长度为22的数组，数组的类型为bool。接着我们用assign关键字将输出OnBoardLED连接到这个数组的最高位。由于**它代表着一个电路**，这里实际上会在电路中将它们连接在一起。
```verilog
always @(posedge clk_in) begin
	freq_div <= freq_div + 1'd1;
end
```
这里使用了always关键字，它的作用是在时钟信号的上升沿执行begin end内的代码。上升沿（posedge）是指方波由0变为1的过程，而下降沿（negedge）则是由1变为0的过程。always与软件中回调（callback）概念很类似，它代表了实际电路中的一个触发器。这里在每一个上升沿的时候将寄存器加一。可以想象的是，随着不断的加一，寄存器中低位会进位到高位，也就是在某个时刻最高位会变成1，即LED发光。而由于没有比22位更高的位数了，当22位想进位时，它仅仅会变为0而不会改变其他事情，此时LED熄灭。如此反复，于是LED就可以闪烁了。 

值得注意的我们完全可以直接将晶振连接到OnBoardLED上，也可以使OnBoardLED在低电压和高电压之间反复变化。然而晶振的频率很高，肉眼完全无法观察。所以我们通过这种方法降低频率。
### 管脚约束
在写完Verilog代码后，我们所需要做的事情还没有结束。我们只是描述了内部电路，而这个程序要与外部的晶振与LED连接。注意clk_in与OnBoardLED只是我们取的名字，程序并不知道clk_in连接着晶振。所以我们需要写ucf来进行管脚约束或称管脚分配，告诉程序如何连接外部电路。
```ucf
NET clk_in LOC = "P8"
NET OnBoardLED LOC = "L7"
```
这其中的P8与L7指的是FPGA芯片的引脚，而这个引脚连接的器件完全由开发板决定。查阅你的开发板资料就可以找到。现实中的管脚约束远非如此简单，如果你要做差分输出，那么你显然要做更多的配置。可见管脚分配也是非常重要的一部。直接书写并不一定简单，有时可以通过可视化工具来实现同样的工作。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/管脚约束.png) 

### 仿真 
对于我们想要的电路，我们描述的已经很完整了。那么，如何验证我们程序的正确性呢？要知道，硬件开发和软件开发是不一样。对于软件开发，如果发现问题，你只要修改重新编译。然而，如果硬件出了问题，你可没办法把集成电路拆开重新调整电路。所以，仿真在电路开发中有着很重要的地位。 

System Verilog不仅提供了描述电路的能力，也提供了仿真电路的能力。由于System Verilog是Verilog的超集，所以在讲授时，我们不区分两者，以Verilog统称。

```verilog
module HelloWorldTest;
	// Inputs
	reg clk_in;
	// Outputs
	wire OnBoardLED;
	// Instantiate the Unit Under Test (UUT)
	HelloWorld uut (
		.clk_in(clk_in), 
		.OnBoardLED(OnBoardLED)
	);
	initial begin
		// Initialize Inputs
		clk_in = 0;
		// Wait 100 ns for global reset to finish
		#100;    
		forever 
			#(10/2) clk_in = ~clk_in;  
		// Add stimulus here
	end      
endmodule
```
我们来看看每一行都是什么意思。
```verilog
reg clk_in;
wire OnBoardLED;
```
这里我们申明了两个变量。由于这是仿真程序，我们不能真的通过一根导线将fpga与外部电路连接在一起，所以我们创建一个寄存器clk_in用来模拟晶振的效果。

```verilog
HelloWorld uut(
		.clk_in(clk_in), 
		.OnBoardLED(OnBoardLED)
	);
```
如果你学过OOP，那你会发现这个和类的初始化很相似。这里我们创建了一个HelloWorld模块，并将clk_in连到定义的寄存器clk_in，将OnBoardLED连接到一根导线。由于电路中模块之间的连接很重要，很多时候我们不采用按照顺序传入参数，而是直接点名接口的名称，减少因此产生的错误。
```verilog
initial begin
	clk_in = 0;
	forever 
		#(10/2) clk_in = ~clk_in; 
end
```
在这里我们模拟晶振的输出。通过initial关键字表明这是仿真程序的入口。在开始我们初始化了clk_in。并通过forever关键字反复执行`#(10/2) clk_in = ~clk_in;`。`#(10/2)`代表间隔10/2个时间单位运行一次后面的代码。而`clk_in = ~clk_in;`通过非操作符使clk_in反复在1与0之间变化，以此模拟晶振。
以下是以上程序的仿真。 

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/仿真错误.png) 

尽管这个程序能在FPGA板运行，但我们发现OnBoardLED并非我们预期的在1与0之间反复跳动，而是显示的X。X被用来表示一个没有初始化的值。仔细观察我们写的程序，我们发现`reg [21:0] freq_div;`定义了一个寄存器却没有初始化它的值。对于实际电路，这个寄存器中的值是不确定的，虽然对于我们简单的示例来说无关紧要，但很多时候这会造成严重后果。（想想C++中的内存错误！）

修改程序为
```verilog
module HelloWorld(
    input wire clk_in,
    output wire OnBoardLED
    );
    reg [21:0] freq_div = 1'd0;
	assign OnBoardLED= freq_div[21];
	always @(posedge clk_in) begin
		freq_div <= freq_div + 1'd1;
	end
endmodule
```
再次运行我们的仿真，得到如下结果 

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/仿真.png) 

可以看到变量OnBoardLED的波形在0与1之间反复跳动，且周期差不多为21ms，人眼可以接受的范围。我们的程序编写的正确了。

## 下一步？ 

在做好了人应该做的事情后，接下来的事情就可以交给机器了。点击软件的综合（Synthesize），综合你的电路。
那么在这个过程中发生了什么呢？你或许听说过非门、与门、或门，这是组成现实中数字电路的积木。而设计数字电路的过程如同搭积木的过程。在之前说过，Verilog等语言出现是为了抽象具体细节提高开发速度。Verilog语言并不直接对应这些器件，所以eda先通过算法将Verilog转化为这些器件的组合，这一步就是我们所说的综合。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/RTL1.png) 

可以看出我们所写的代码被综合为一个略微复杂的电路，如果手动设计，显然会花费比我们多许多的时间。主要原因是因为有一个21位的寄存器。我们可以将它合并为一个整体。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/RTL2.png) 

接着点击软件的实现（implementation）。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/实现.png) 

可以看出实现里面又分为Map，Place & Route。如何摆放上一步生成的器件是现在的主要问题。大部分时候我们希望这些器件之间的连线越短越好，或是运算速度越快越好，有时我们希望某跟导线连接到芯片的某个引脚上。摆放器件和连线的过程被称为实现。

让我们通过MinecraftHDL来复习一下这个过程，它可以将Verilog等语言转换为Minecraft中的红石逻辑电路。[https://github.com/itsFrank/MinecraftHDL](https://github.com/itsFrank/MinecraftHDL "MinecraftHDL")  

在minecraft中，你可以通过游戏机制来实现门电路，也就是我们所说的组成数字电路的器件。 

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/minecraft_logic.png) 

随后这个mod通过一个开源的Verilog综合套件Yosys将Verilog代码转换成由门电路来表达的形式。接着通过一些简单的算法完成布局和连线。 

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/minecraftHDL.png) 

那么在下载到FPGA后又发生了什么呢？这要从FPGA的构造说起了，FPGA是由许多小的逻辑单元构成的，这些逻辑单元实际上是由查找表（LUT）构成的。查找表可以理解为一张表格，存有每个输入对应着的输出。在数字电路中，可以用真值表来表示不同数字器件。而查找表存储的实际上就是这些数字器件的真值表。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/LogicCell.gif) 

在配置的过程中，FPGA根据前两步生成的二进制文件配置每个查找表，随后将它们连接在一起。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/LogicCells.gif) 

当然有些查找表可能和IO连接在一起，这就是我们之前所说的管脚约束。

![](https://github.com/ShanghaitechGeekPie/FPGA-tutorial/raw/master/docs/zh-cn/pic/fpga-intro/LogicCells_IOs.gif) 

## 回顾FPGA的开发流程 
FPGA的开发流程如下: 

* 告诉程序你想要的**数字电路**。你可以画一个电路图，或者使用硬件描述语言来描述。
* 使用EDA综合。这一步会产生一个二进制文件，将它下载到你的FPGA里。
* 成功了！如果足够幸运，你的FPGA就会像你想的那样工作。 
 
值得注意的是： 

- FPGA可以无限次的修改，或者说“烧录”。如果你发现程序有问题，只要修改重新下载就可以了。
- 与软件不同，我们称HDL变成二进制的文件的过程为**综合（synthesis）与实现（implementation）**而不是“编译”，称下载到FPGA的过程为**配置（configuration）**而不是“烧录”。这与FPGA工作原理相关。
- 断电后FPGA会失去配置的程序（像计算机中RAM）。不过可以通过外接FLASH等方法固化程序，但这没有改变FPGA断电失去程序的特性，只是在每次上电时重新配置了。 

## 单片机是如何实现LED的闪烁 
最后我们再来看看单片机是如何实现的。
```c
#include "reg51.h"
sbit Led0=P2^0;
void main(void)
{
	P2=0xFF;
	while(1)
	{
		Led0=1;
		Delay();
		Led0=0;
		Delay();
	}
}
```
这段代码通过编译器变成机器码，储存在ROM中。开始执行的时候，内部有个程序计数器(PC)，告诉单片机从哪个地址取指令。单片机内的IO口映射到操作特殊功能寄存器（SFR），然后通过修改特殊功能寄存器来改变IO口的电平。 

可以看出的是对于单片机来说，每一种操作都对应着底层固定的流程，单片机仅仅可以实现指令集中的操作。对于更加复杂的操作，则是通过更高层的抽象，则是通过高级语言比如C、Java、Python来实现的。

而FPGA则不同，每一段HDL代码都直接对应着至少一种数字电路。这种电路的结构并不一定是单片机以及大部分计算机的图灵架构。这使得FPGA可以针对某一种算法进行优化，可以做到单片机做不到的并行计算。这种灵活性使得FPGA在加速人工智能上有所建树。

> https://www.fpga4fun.com/FPGAinfo2.html  
> https://zhuanlan.zhihu.com/p/69415960  
> 'Digital Design and Computer Architecture (Second Edition)'  
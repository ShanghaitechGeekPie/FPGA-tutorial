# 数据类型
注意：在本文中，“数集”是指2态变量（0和1）与4态变量（0，1，Z和X）。“数据类型”是指所有net，variable与自定义的类型。“数集”，“数据类型”与IEEE官方SystemVerilog用于开发模拟器和综合器的标准中的用法不一致。SystemVerilog标准使用对于开发工具有用的词，如“类型”，“对象”与“类”。而作者认为这既不口语化也无法启发读者。

## 数集
Verilog中原先只有4态的变量，比如vector中的任何一位都可以是0，1，Z和X中任意一个。SystemVerilog添加了2态变量，每个变量只能是0或者1。SystemVerilog添加了bit和logic关键字来分别表示2态和4态数集。net类型，如wire，只使用4态的数集。有些variable使用4态的数集，而其它则使用2态的数集。

bit和logic关键字还可以用于隐式的定义net或者variable，具体是哪个取决于使用。bit关键字一定会被推导为variable。logic在大多情况下被推导为variable，但如果和input或者inout 模块端口声明一起使用，则会被推导为net。下述展示了这个推导的原则

```verilog
module A;
...
endmodule
module M (
// 模块端口被推导的类型
input i1, // 4态net
input logic i2, // 4态net
input bit i3, // 2态variable
output o1, // 4态net
output logic o2, // 4态variable
output bit o3 // 2态variable
);
// 内部信号的推导或显式声明的类型
bit clock; // 2态variable
logic reset; // 4态variable
logic [7:0] data; // 4态variable
wire [7:0] n1; // 显式定义了net，推导为4态logic
wire logic [7:0] n2; // 显式定义了net
var [7:0] v1; // 显式定义了variable，推导为logic
var logic [7:0] v2; // 显示定义了4态variable
...
endmodule
```

**重要**：在综合过程中，bit和logic是没有区别的。2态和4态数集是用于仿真，在综合中没有真实含义。

> SystemVerilog优势1 —— 你不再需要思考定义模块端口为wire还是reg（或者更确切地说，net还是variable）。在SystemVerilog中，你只需要声明所有模块端口和内部信号为logic，综合器会自动正确的推导net或variable。（在一些罕见的情况中，工程师希望显式的定义一个类型而不是由logic自动推导）

数集对于用于验证的代码则有所不同。在测试样例中，随机生成的测试变量应该被定义为bit（2态），而不是logic（4态）。参考
> Sutherland, “I’m Still in Love with My X!”, Design and Verification Conference (DVCon), San Jose, California, February 2013.

## Net类型
可综合的net类型有：
- wire和tri —— 多驱动的net
- supply0和supply1 —— 分别是常量0或者1的net
- wand，triand，wor和trior —— 对多驱动分别做and或or的net

本文不再讨论这些net是如何被综合的，因为它们一直都是verilog中的一部分。关于这些net是如何被综合的，可以参考1364.1 Verilog RTL Synthesis 标准或者综合器的文档。

> SystemVerilog优势2 —— （或者至少应该是一个优势）—— SystemVerilog有uwire net类型。它或许会有益于设计工作，但现在没有被综合器支持。12章讨论了为什么uwire对于设计工作很有用。

## Variable类型
Variable类型经常被用于always块中。Verilog/SystemVerilog规定过程赋值语句的左值必需是Variable类型。SystemVerilog中可综合的Variable类型有：
- reg —— 多用途、自定义长度的4态variable
- integer —— 32位的4态variable
- logic —— 除非被用于声明input/inout类型，否则被推导为多用途、自定义长度的4态variable
- bit —— 总是被推导为多用途、自定义长度的2态variable
- byte，shortint，int和longint —— 分别为8位，16位，32位，64位的2态variable
reg和integer一直是Verilog的一部分，不在本文的讨论范围内。

logic关键字不是一个variable类型，不过在大多数情况下，logic会被推导为variable。因此，logic可以取代reg，让综合器自动推导为reg。

bit，byte，shortint，int和longint类型只储存2态的值。综合器把它们当作4态的reg来处理。**注意！**：这可能导致仿真和综合的结果不一致，因为综合器不能保证2态变量的行为。一个可能的区别就是在仿真时，2态变量的初值为0。而综合后的设计内2态变量的初值可能为0或1。

> 建议 —— 在绝大多数变量声明中使用logic，让综合器根据上下文推导为net或variable。避免在RTL设计中使用2态变量，因为它们会隐藏设计问题，从而导致仿真和综合的结果不一致。唯一的例外就是在for循环中使用int作为迭代的变量。

## vector定义（packed array）
声明Vectors时需要使用方括号声明范围，并随后指定vector的名称。这个范围被声明为[最高有效位:最低有效位]。最高有效位和最低有效位可以是任意数字，最高有效位可以比最低有效位大或者小。

```verilog
wire [31:0] a; // 32-bit vector, 小字端
logic [1:32] b; // 32-bit vector, 大字端
```

Vector声明，索引一直是verilog可综合的一部分。Verilog-2001增加了表达式索引，也是可综合的。
> [what-is-this-operator-called-as-in-verilog](https://electronics.stackexchange.com/questions/74277/what-is-this-operator-called-as-in-verilog)
> ```verilog
>logic [31: 0] a_vect;
>logic [0 :31] b_vect;
>logic [63: 0] dword;
>integer sel;
>
>a_vect[ 0 +: 8] // == a_vect[ 7 : 0]
>a_vect[15 -: 8] // == a_vect[15 : 8]
>b_vect[ 0 +: 8] // == b_vect[0 : 7]
>b_vect[15 -: 8] // == b_vect[8 :15]
>
>dword[8*sel +: 8] // variable part-select with fixed width

SystemVerilog标准称vectors为packed array，意在说明vector是表示连续存储的一串bits。SystemVerilog的一大改进是增加了使用多维定义讲vector分为多个子区域。
```verilog
logic [3:0][7:0] a; // 32-bit vector, 4个8位的子区域
a[2] = 8’hFF; // 向第2个子区域赋值
a[1][0] = 1’b1; // 向第1个子区域的第0位赋值
```
以上都是可以综合的。使用这个特性对于需要频繁索引vector子区域的设计非常有用。上述例子展示了如何简单的从32位的vector中索引每个byte。
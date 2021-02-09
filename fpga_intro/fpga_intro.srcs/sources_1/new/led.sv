`timescale 1ns / 1ps

module led(
    input clk,
    output led
    );
    logic clk_div,locked;

    //连接clk_wiz_0ip与led模块
    clk_wiz_0 c(
        .clk_out1(clk_div),
        .locked(locked),
        .clk_in1(clk)
    );

    //计数器，由于计数器在8388608+1时溢出了，所以就变成0了
    logic [22:0] cache=0;
    always_ff@(posedge clk_div)
        if(locked)
            cache <= cache + 1'b1;

    assign led=cache[22];
endmodule

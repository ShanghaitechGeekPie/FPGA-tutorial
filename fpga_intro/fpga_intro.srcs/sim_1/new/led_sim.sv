`timescale 1ns / 1ps

module led_sim();

logic clk,led;

led a(
    .clk(clk),
    .led(led)
);

initial begin
    clk = 0;
    forever #(10) clk = ~clk;
end
endmodule
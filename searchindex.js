Object.assign(window.search, {"doc_urls":["index.html#fpga-tutorial","index.html#现场可编程","index.html#门","index.html#阵列"],"index":{"documentStore":{"docInfo":{"0":{"body":11,"breadcrumbs":2,"title":2},"1":{"body":1,"breadcrumbs":0,"title":0},"2":{"body":1,"breadcrumbs":0,"title":0},"3":{"body":32,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"教程仍然处于编写与修改中，受限于作者对于这个领域的理解水平，很可能会存在错误。如果你发现了任何错误，欢迎发起一个issue。 请访问 https://shanghaitechgeekpie.github.io/FPGA-tutorial/#/ 阅读本教程 FPGA是现场可编程门阵列( F ield P rogrammable G ate A rray)的简称。","breadcrumbs":"前言 » FPGA Tutorial","id":"0","title":"FPGA Tutorial"},"1":{"body":"FPGA是可以重复编程以实现不同功能的器件","breadcrumbs":"前言 » 现场可编程","id":"1","title":"现场可编程"},"2":{"body":"FPGA所能编程实现的最小单元是门电路，比如通过编程实现一个与门","breadcrumbs":"前言 » 门","id":"2","title":"门"},"3":{"body":"FPGA主要是由许多可编程逻辑块( C onfigurable L ogic B lock)组成的 三种不同的数字系统 FPGA是通用性与专用性妥协的产物。它相比于通用计算机更加专用，因此速度与吞吐量更大，功耗更低。它相比于专用集成电路ASIC，以高功耗与大面积换取通用性。 这个教程使用Xilinx的开发套件Vivado进行开发，所有工程文件都可以在example_src文件夹中找到。本教程包括： LED闪烁 FPGA开发流程简介 数据类型 常量、变量与数组 电路描述 组合逻辑与数字逻辑 层次构建 搭建模块，构建体系架构 ADC驱动电路 有限状态机 PWM呼吸灯 SV for verification RTL分析 FPGA内部组成与工作原理 HDMI驱动电路 FPGA用于高速接口 PID算法 ZYNQ介绍：FPGA加速的单片机 图像边缘识别 高层次综合语言（HLS） 如果读者再掌握了FPGA的一些用法后仍对FPGA有所兴趣，我校开设了几门与FPGA相关的课程，它们是： EE116 基于FPGA的硬件系统设计 EE113 数字集成电路I EE216 可重构计算 引用 EE115 Topic 1 Introduction.ppt p34","breadcrumbs":"前言 » 阵列","id":"3","title":"阵列"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"d":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"b":{"df":1,"docs":{"3":{"tf":1.0}}},"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"1":{"1":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"1":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":1,"docs":{"0":{"tf":1.0}},"p":{"df":0,"docs":{},"g":{"a":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":2.23606797749979}},"是":{"df":0,"docs":{},"通":{"df":0,"docs":{},"用":{"df":0,"docs":{},"性":{"df":0,"docs":{},"与":{"df":0,"docs":{},"专":{"df":0,"docs":{},"用":{"df":0,"docs":{},"性":{"df":0,"docs":{},"妥":{"df":0,"docs":{},"协":{"df":0,"docs":{},"的":{"df":0,"docs":{},"产":{"df":0,"docs":{},"物":{"df":0,"docs":{},"。":{"df":0,"docs":{},"它":{"df":0,"docs":{},"相":{"df":0,"docs":{},"比":{"df":0,"docs":{},"于":{"df":0,"docs":{},"通":{"df":0,"docs":{},"用":{"df":0,"docs":{},"计":{"df":0,"docs":{},"算":{"df":0,"docs":{},"机":{"df":0,"docs":{},"更":{"df":0,"docs":{},"加":{"df":0,"docs":{},"专":{"df":0,"docs":{},"用":{"df":0,"docs":{},"，":{"df":0,"docs":{},"因":{"df":0,"docs":{},"此":{"df":0,"docs":{},"速":{"df":0,"docs":{},"度":{"df":0,"docs":{},"与":{"df":0,"docs":{},"吞":{"df":0,"docs":{},"吐":{"df":0,"docs":{},"量":{"df":0,"docs":{},"更":{"df":0,"docs":{},"大":{"df":0,"docs":{},"，":{"df":0,"docs":{},"功":{"df":0,"docs":{},"耗":{"df":0,"docs":{},"更":{"df":0,"docs":{},"低":{"df":0,"docs":{},"。":{"df":0,"docs":{},"它":{"df":0,"docs":{},"相":{"df":0,"docs":{},"比":{"df":0,"docs":{},"于":{"df":0,"docs":{},"专":{"df":0,"docs":{},"用":{"df":0,"docs":{},"集":{"df":0,"docs":{},"成":{"df":0,"docs":{},"电":{"df":0,"docs":{},"路":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"的":{"df":0,"docs":{},"一":{"df":0,"docs":{},"些":{"df":0,"docs":{},"用":{"df":0,"docs":{},"法":{"df":0,"docs":{},"后":{"df":0,"docs":{},"仍":{"df":0,"docs":{},"对":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"有":{"df":0,"docs":{},"所":{"df":0,"docs":{},"兴":{"df":0,"docs":{},"趣":{"df":0,"docs":{},"，":{"df":0,"docs":{},"我":{"df":0,"docs":{},"校":{"df":0,"docs":{},"开":{"df":0,"docs":{},"设":{"df":0,"docs":{},"了":{"df":0,"docs":{},"几":{"df":0,"docs":{},"门":{"df":0,"docs":{},"与":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}},"g":{"df":1,"docs":{"0":{"tf":1.0}}},"h":{"d":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"p":{"3":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"x":{"df":0,"docs":{},"的":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"套":{"df":0,"docs":{},"件":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"，":{"df":0,"docs":{},"所":{"df":0,"docs":{},"有":{"df":0,"docs":{},"工":{"df":0,"docs":{},"程":{"df":0,"docs":{},"文":{"df":0,"docs":{},"件":{"df":0,"docs":{},"都":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"在":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}},"z":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"q":{"df":0,"docs":{},"介":{"df":0,"docs":{},"绍":{"df":0,"docs":{},"：":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}},"breadcrumbs":{"root":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"d":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"b":{"df":1,"docs":{"3":{"tf":1.0}}},"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"1":{"1":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"1":{"6":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":1,"docs":{"0":{"tf":1.0}},"p":{"df":0,"docs":{},"g":{"a":{"df":4,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":2.23606797749979}},"是":{"df":0,"docs":{},"通":{"df":0,"docs":{},"用":{"df":0,"docs":{},"性":{"df":0,"docs":{},"与":{"df":0,"docs":{},"专":{"df":0,"docs":{},"用":{"df":0,"docs":{},"性":{"df":0,"docs":{},"妥":{"df":0,"docs":{},"协":{"df":0,"docs":{},"的":{"df":0,"docs":{},"产":{"df":0,"docs":{},"物":{"df":0,"docs":{},"。":{"df":0,"docs":{},"它":{"df":0,"docs":{},"相":{"df":0,"docs":{},"比":{"df":0,"docs":{},"于":{"df":0,"docs":{},"通":{"df":0,"docs":{},"用":{"df":0,"docs":{},"计":{"df":0,"docs":{},"算":{"df":0,"docs":{},"机":{"df":0,"docs":{},"更":{"df":0,"docs":{},"加":{"df":0,"docs":{},"专":{"df":0,"docs":{},"用":{"df":0,"docs":{},"，":{"df":0,"docs":{},"因":{"df":0,"docs":{},"此":{"df":0,"docs":{},"速":{"df":0,"docs":{},"度":{"df":0,"docs":{},"与":{"df":0,"docs":{},"吞":{"df":0,"docs":{},"吐":{"df":0,"docs":{},"量":{"df":0,"docs":{},"更":{"df":0,"docs":{},"大":{"df":0,"docs":{},"，":{"df":0,"docs":{},"功":{"df":0,"docs":{},"耗":{"df":0,"docs":{},"更":{"df":0,"docs":{},"低":{"df":0,"docs":{},"。":{"df":0,"docs":{},"它":{"df":0,"docs":{},"相":{"df":0,"docs":{},"比":{"df":0,"docs":{},"于":{"df":0,"docs":{},"专":{"df":0,"docs":{},"用":{"df":0,"docs":{},"集":{"df":0,"docs":{},"成":{"df":0,"docs":{},"电":{"df":0,"docs":{},"路":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"的":{"df":0,"docs":{},"一":{"df":0,"docs":{},"些":{"df":0,"docs":{},"用":{"df":0,"docs":{},"法":{"df":0,"docs":{},"后":{"df":0,"docs":{},"仍":{"df":0,"docs":{},"对":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"有":{"df":0,"docs":{},"所":{"df":0,"docs":{},"兴":{"df":0,"docs":{},"趣":{"df":0,"docs":{},"，":{"df":0,"docs":{},"我":{"df":0,"docs":{},"校":{"df":0,"docs":{},"开":{"df":0,"docs":{},"设":{"df":0,"docs":{},"了":{"df":0,"docs":{},"几":{"df":0,"docs":{},"门":{"df":0,"docs":{},"与":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}},"g":{"df":1,"docs":{"0":{"tf":1.0}}},"h":{"d":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"p":{"3":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"x":{"df":0,"docs":{},"的":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"套":{"df":0,"docs":{},"件":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"，":{"df":0,"docs":{},"所":{"df":0,"docs":{},"有":{"df":0,"docs":{},"工":{"df":0,"docs":{},"程":{"df":0,"docs":{},"文":{"df":0,"docs":{},"件":{"df":0,"docs":{},"都":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"在":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}},"z":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"q":{"df":0,"docs":{},"介":{"df":0,"docs":{},"绍":{"df":0,"docs":{},"：":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}},"title":{"root":{"df":0,"docs":{},"f":{"df":0,"docs":{},"p":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});
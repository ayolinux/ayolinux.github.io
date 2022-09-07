import {SidebarConfig} from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '计算机小白自学计划',
        link: '/',
    },
    '/ch0.md',
    '/ch1.md',
    {
        text: '第二章：操作系统',
        collapsible: true,
        children: ['/ch2/ch2-1.md','/ch2/ch2-2.md','/ch2/ch2-3.md','/ch2/ch2-4.md','/ch2/ch2-5.md','/ch2/ch2-6.md','/ch2/ch2-7.md'],
    },
    {
        text: '第三章：编程基础串讲',
        collapsible: true,
        children: ['/ch3/ch3-1.md','/ch3/ch3-2.md','/ch3/ch3-3.md'],
    },
    {
        text: '第四章：Web之路',
        collapsible: true,
        children: ['/ch4/ch4-1.md','/ch4/ch4-2.md','/ch4/ch4-3.md'],
    },
    {
        text: '第五章：数据库漫谈',
        collapsible: true,
        children: ['/ch5/ch5-1.md','/ch5/ch5-2.md','/ch5/ch5-3.md'],
    },
    {
        text: '第六章：虚拟化与云计算',
        collapsible: true,
        children: ['/ch6/ch6-1.md','/ch6/ch6-2.md'],
    },
    '/add_plan.md',
] as SidebarConfig;

// 规范传递进来的数据格式

// 01 列表的每一项数据格式
export interface ListItem {
    // 头像
    avater?: string,
    // 标题
    title?: string,
    // 描述
    desc?: string,
    // 时间
    time?: string,
    // 标签内容
    tag?: string,
    // 标签类型
    tagType?: "" | "success" | "info" | "warning" | "danger"
}

// 02 整体的列表内容
export interface ListOptions {
    title?: string,
    content?: ListItem[]
}


// 03 操作选项
export interface ActionOptions {
    text?: string,
    icon?: string
}
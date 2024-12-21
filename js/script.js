function showContent(contentId, element) {
    // 移除所有内容区域的 'active' 类
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // 显示被点击的控制按钮对应的内容区域
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // 移除所有控制按钮的 'active' 类
    const controls = document.querySelectorAll('.control');
    controls.forEach(control => control.classList.remove('active'));

    // 为当前点击的控制按钮添加 'active' 类
    element.classList.add('active');
}

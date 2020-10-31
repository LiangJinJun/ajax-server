one.onclick = () => {
    // AJAX
    const request = new XMLHttpRequest()
    request.open('get', 'style.css')
    request.onload = () => {
        let aa = document.createElement('style')
        aa.textContent = request.response
        document.head.appendChild(aa)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
// alert('我执行了')
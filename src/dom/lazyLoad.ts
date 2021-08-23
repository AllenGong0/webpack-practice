function isInViewPortOfOne (el) {
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;//窗口可视高度
    const offsetTop = el.offsetTop;//元素顶部高度
    const offsetHeight = el.offsetHeight;//元素高度
    const scrollTop = document.documentElement.scrollTop;//滚动距离

    console.log(scrollTop,"scrollTop")
    //判断是否在工作窗口内
    const top = (offsetTop+offsetHeight )- scrollTop
    if(top>0&&top<viewPortHeight){
        console.log("eeee")
        return true
    }
    else{
        return false;
    }
  }

function lazyLoad(){
    const el = document.getElementById("lazyLoad")
    // console.log(el.offsetHeight,el.offsetTop)
    // console.log(document.documentElement.scrollTop)

    // window.onscroll = ()=>{

    //     const scrollTop = document.documentElement.scrollTop;//滚动距离

    //     console.log(scrollTop,"scrollTop")
    //     // console.log("000")
    //     // isInViewPortOfOne(el)
    // }

    window.requestAnimationFrame((res)=>{
        console.log(res)
    })
    window.alert("222")


}
lazyLoad()
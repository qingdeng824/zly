/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...
// 


// console.log('obj',obj)
// const doingth = JSON.parse(window.localStorage.getItem("thing")) || []

// let info = null
let obj = {
    'doing':[],
    'did':[]
}
init()
function init(){
    const dothing = JSON.parse(window.localStorage.getItem('thing'))
    console.log(dothing)


    $('#title').on('keydown',function(e){
        e = e || window.event
        var code = e.keyCode || e.which
        if(code === 13){
            e.preventDefault()
            info = $(this).val().trim()
            // console.log(info)
            obj.doing.push(`${ info }`)
            console.log('newobj',obj)
            // window.localStorage.getItem('thing', JSON.stringify(obj))
            console.log(dothing)
            window.localStorage.setItem('thing', JSON.stringify(dothing))
            bindHtml()
            reload()
        }
        
    })

    
}
function reload(){
    if(JSON.parse(window.localStorage.thing)){
        JSON.parse(window.localStorage.thing)
        bindHtml()
    }
}

function bindHtml(){
    var str = ''
    window.localStorage.setItem('thing', JSON.stringify(obj))
    obj.doing.forEach(item => {
        str += `
        <li>
            <input type="checkbox" />
            <p onclick="edit(1)">${item}</p>
            <a href="javascript:remove(1)">-</a>
        </li>`
        
    })
    $('#todolist').html(str)

    var str2 = ''
    obj.did.forEach(item => {
        str2 += `
        <li>
            <input type="checkbox" checked="checked" />
            <p onclick="edit(1)">${item}</p>
            <a href="javascript:remove(1)">-</a>
        </li>`
        
    })
    $('#donelist').html(str2)
    $('#todocount').html(obj.doing.length)
    $('#donecount').html(obj.did.length)
}

//渲染页面
// function bindHtml(){
//   console.log(doingth)
//   doingth.doing.forEach(item => {
//     console.log(item,"item")
//     const li = $('<li></li>')
//     li.html(`
//         <input type="checkbox" />
//         <p onclick="edit(1)">${ item }</p>
//         <a href="javascript:remove(1)">-</a>
//     `)
//     // console.log(li.html())
//     $('#todolist').append(li)
//   })
// }


//  window.localStorage.list=JSON.stringify(this.list);
//  this.list = JSON.parse(window.localStorage.list);




//渲染页面
// bindHtml()
// function bindHtml() {
//   const doingth = JSON.parse(window.localStorage.getItem('doing')) || []

//   thing.doing.forEach(item => {
//     console.log(item)
//     }


// //   新建标签
//     const li = $('<li></li>')
//     li.html(`
//         <input type="checkbox" />
//         <p onclick="edit(1)">${ info }</p>
//         <a href="javascript:remove(1)">-</a>
//     `)
//     console.log(li.html())
//     $('#todolist').append(li)
//     console.log($('#todolist'))
//     // window.localStorage.setItem('thing', JSON.stringify(cart))
// }



// data = {
//     thing:`${info}`
// }
// // console.log(data)
// const thing = JSON.parse(window.localStorage.Item('thing')) || []
// window.localStorage.setItem('thing', JSON.stringify(cart))
// console.log(thing)

// bindHtml()

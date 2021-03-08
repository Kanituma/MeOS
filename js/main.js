// loading



var text1 =["_D_E_M_I_32","1,243","214","THINGS ABOUT","Me,myself and I"]
var text2 =["oriDesign","1,543","194","MY WORKS","since 2019"]
var text3 =["_dedecam","2,243","127","CAPTURE LIFE","with panasonic G7"]
var text4 =["mail_x2","1,733","224","TO CONTACT","Welcome!"]
var texts=[text1,text2,text3,text4]
var item1=[".about p",".about h2",".softul",".ability"]
var item2=[".sec1",".sec2",".sec3",".sec4",".sec5",".sec6",".sec7"]
var item3=[".life1",".life2",".life3",".life4"]
var item4=[".profile",".weixin",".weibo",".email"]
var items=[item1,item2,item3,item4]
$(document).ready(function(){
    var tl = new TimelineMax({});
    var loadblocks = $(".loadblock").toArray().sort(function(){return 0.5-Math.random()});
    // console.log(loadblocks )
    // console.log(loading )
    tl
        // .staggerTo(loadblocks,0.01,{opacity:0,ease:Power0.easeNone},0.003,"+=3")
        .to("#loading img",1,{scale:0,ease:SlowMo.ease.config(0.7, 0.7, false),onComplete:function(){
            $("#loading").remove()
        }},"-=1")
        .staggerFromTo([".instagram",".project",".title"],0.3,{autoAlpha:0,x:20,y:20},{autoAlpha:1,x:0,y:0,ease:Back.easeOut},0.2)
        .staggerFromTo([".ins-profile",".ins-bg",".ins-photo",".ins-button"],0.2,{autoAlpha:0,y:20},{autoAlpha:1,y:0,ease:Back.easeOut},0.15,"-=0.8")
        .staggerFromTo([".about p",".about h2",".softul",".ability"],0.15,{autoAlpha:0,y:20},{autoAlpha:1,y:0,ease:Back.easeOut},0.1,"-=0.4")
        .staggerFromTo([".title h1",".title span"],0.2,{autoAlpha:0,y:20},{autoAlpha:1,y:0,ease:Back.easeOut,onComplete:function(){
            $(".ins-photo").css("animation","ins-loop 2.5s steps(37) both infinite")
        }},0.05,"-=0.1")

    console.log($("#topl li"))
    $("#topl li").click(function(){
        $(".ins-cover").css("animation","instrans 2s steps(50) forwards ")
        var oldn="."+$(".checked").html().toLowerCase()
        var oldi = $(".checked").index()
        var newn="."+$(this).html().toLowerCase()
        var newi=$(this).index()


        // 页面内容变更
        $(".checked").removeClass("checked");
        $(this).addClass("checked");
        console.log("oldi="+oldi+",newi="+newi)
        detype(".ins-name",texts[oldi-1][0],texts[newi-1][0])
        $(".ins-name").html(texts[newi-1][0])
        // typeChange(".ins-name",texts[oldi-1][0],texts[newi-1][0])
        $(".htn").html(texts[newi-1][1])
        $(".cmtn").html(texts[newi-1][2])
       
        $(".heart").addClass("scaleUp")
        $(".cmt").addClass("scaleUp")
        $("h1").html(texts[newi-1][3])
        $(".since").html(texts[newi-1][4])
        // typeChange(".title h1",texts[oldi-1][3],texts[newi-1][3])
        typeChange(".title .since",texts[oldi-1][4],texts[newi-1][4])
        
        console.log()
        // $(".checked").removeClass("checked");
        // $(this).addClass("checked")
        
        
        var ntl = new TimelineMax({})
        ntl
            .staggerFromTo(items[oldi-1],0.1,{autoAlpha:1,x:0,y:0},{autoAlpha:0,x:5,y:5,ease:Power0.easeNone},0.08,"+=0",changeSec)
            .staggerFromTo(items[newi-1],0.1,{autoAlpha:0,x:5,y:5},{autoAlpha:1,x:0,y:0,ease:Power0.easeNone},0.05,"+=0",changeIns)

        function changeSec(){
            $(oldn).css("display","none");
            $(newn).css("display","block");
            setTimeout(function(){$(".ins-cover").css("animation","")},2000)
            $(".heart").removeClass("scaleUp")
            $(".cmt").removeClass("scaleUp")
           
            // setTimeout(function(){$("h1").removeClass("bar")},3000)
            // setTimeout(function(){$(".since").removeClass("bar")},1000)
        }
        function changeIns(){
            $(".ins-photo").css({"background-image":"url(img/ins"+newi+".png)"})
        }
    }) 
    }
    )

    
    
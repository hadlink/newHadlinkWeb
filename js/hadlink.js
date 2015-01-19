/**
 * Created by Administrator on 2015/1/14.
 */
var main ={
    commenNav:function(selector){
        $(window).scroll(function(){
            var top = $(document).scrollTop()
            if(top >100){
                $('#js-comIntro').next().css('background','')
                $('#js-comIntro').css('background','#E67E22')
            }
            if(top >=300){
                $('#js-president').next().css('background','')
                $('#js-president').prev().css('background','')
                $('#js-president').css('background','#E67E22')
            }
            if(top >=1400){
                $('#js-devCourse').next().css('background','')
                $('#js-devCourse').prev().css('background','')
                $('#js-devCourse').css('background','#E67E22')
            }
            if(top >=2400){
                $('#js-organization').next().css('background','')
                $('#js-organization').prev().css('background','')
                $('#js-organization').css('background','#E67E22')
            }
            if(top >=4100){
                $('#js-coreGroup').prev().css('background','')
                $('#js-coreGroup').css('background','#E67E22')
            }
        })
    }
}

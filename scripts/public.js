$(function () {
    //点击内容区导航条切换样式
    $('.contNavigationBar li').click(function () {
        $(this).addClass('am-active').siblings('li').removeClass('am-active');
    });


    //班级空间(老师)最新考勤 文字滚动
    var pIndex = 0; //当前li索引
    var newestWordP = $('.newestWord p'); //要滚动的li
    var pLenght = $('.newestWord p').length;

    function kq() {
        var index = (pLenght) - (pIndex);
        if (index == 2) {
            $('.newestWord p:eq(0)').stop();
        } else if (!newestWordP.is(":animated")) {//判断元素是否处于动画状态
            $('.newestWord p:eq(0)').animate({marginTop: '-=' + ($('.newestWord p:eq(' + pIndex + ')').height())}, 'slow');
            pIndex++;
        }
    }

    setInterval(kq, 2000); //多少秒滚动一次

    //班级空间(老师)故事墙 文字滚动
    var liIndex = 0; //当前li索引
    var storyCLi = $('.storyC li'); //要滚动的li
    var liLenght = $('.storyC li').length;

    function gd() {
        var index = (liLenght) - (liIndex);
        if (index == 4) {
            $('.storyC li:eq(0)').stop();
        } else if (!storyCLi.is(":animated")) {
            $('.storyC li:eq(0)').animate({marginTop: '-=' + ($('.storyC li:eq(' + liIndex + ')').height() + 21)}, 'slow');
            liIndex++;
        }
    }

    setInterval(gd, 2000);

    //注册第三步弹出框（选择学校）
    $('.choiceTdUl ul li').click(function () {
        $(this).addClass('choiceLiBack').siblings('li').removeClass('choiceLiBack');
    });
    $('.choiceUl li').click(function () {
        $(this).addClass('choUlBor').siblings('li').removeClass('choUlBor');
    });
    $('.choiceRightSpan').click(function () {
        $(".close-reveal-modal").click();//关闭窗口
        $('#setUpSchool').reveal(); //打开窗口
        $(".setUpTable p").click(function () {
            if ($('#setUpSchool form').validationEngine('validate')) { //验证表单是否通过
                $(".close-reveal-modal").click();
            }
        });
    });

    //老师注册点击开始注册验证表单
    $('.threeImg1').click(function () {
        if ($('.threeTable  form').validationEngine('validate')) {
            window.open('registerSuccess.html', '_self');//跳转页面
        }
    });

    //关联孩子
    var current = null;

    $('.cloneChildren1 input').click(function () { //点击当前关联孩子的input
        current = $(this).parents('.cloneChildren1');
        //alert(current[0]);
    })
    //点击关联孩子中的加号
    var beforeImg = '<img src="images/6_4.png" class="relationReduce">';//减号图片
    $('.relationPlus').click(function () {
        var count = $('.cloneChildren1').length; //获取添加的条数
        //alert(count);
        //添加第二个
        var cloneChildren2Tr = $('.cloneChildren2:first').clone(true).addClass('cloneDisplay');//找到要添加的tr，并给其加class隐藏
        cloneChildren2Tr.find('.relationSelect').find('div').addClass('relatIn');//找到tr下的div，并给其加class隐藏

        //添加第一个
        var cloneChildren1Tr = $('.cloneChildren1:first').clone(true);//找到要添加的tr
        var cloneSpan = cloneChildren1Tr.find('td').find('p').find('span');//文字（得到关联孩子01）
        cloneSpan.text(count);//文字（将关联孩子的1改为添加的条数）
        //cloneSpan.attr("id","test01")
        cloneSpan.text(parseInt(cloneSpan.text()) + 1); //文字(关联孩子+1)

        cloneChildren1Tr.find('.relation1').find('img').before(beforeImg);//将减号添加到加号前面

        cloneChildren1Tr.find('.relation1').find('.relationPlus').show(); //加号显示
        $('.cloneChildren1').find('.relation1').find('.relationPlus').hide();//加号隐藏

        $('.cloneEnd').before(cloneChildren1Tr);
        $('.cloneEnd').before(cloneChildren2Tr);
        reduce();
    });
    //点击关联孩子中的减号
    function reduce() {
        $('.relationReduce').click(function () {
            $(this).parent().parent().hide();
            $(this).parent().parent().prev().prev('.cloneChildren1').children('.relation1').find('.relationPlus ').show();//上一个关联孩子的加号显示
            $(this).parent().parent().next().remove();
            $(this).parent().parent().remove();
        })
    }

    //在关联孩子弹出框中选择孩子
    $('.parentTable table td').click(function () {
        $('.relation1 a>input').attr('value', $(this).text());
        $(".close-reveal-modal").click();//关闭窗口
        if (current)
        //alert(current.next('.cloneChildren2'))
            current.next('.cloneChildren2').removeClass('cloneDisplay');//当前的input操作
    });

    //判断（您和孩子的关系），如果选择“其他关系”就显示下一个input
    function relatS() {
        $('.relationSelect select').change(function () {
            if ($(this).find("option:selected").text() == '其他关系') {
                $(this).siblings('div').removeClass('relatIn');
            } else {
                $(this).siblings('div').addClass('relatIn');
            }
        })
    }

    relatS();


    //(班级空间 老师)右边任课老师
    $('.teach ul li:last').attr('style', ' border-bottom:0px;');

    //(班级空间 老师)右边热门课程
    $('.hotCurriculum ul li:even ').attr('style', 'margin-right:50px;')

    //(班级公告 老师)点击标题栏
    $('.notTitle ul li').click(function () {
        $(this).addClass('notTitBorder').siblings('li').removeClass('notTitBorder');
    });

    //(班级公告 老师)前三条数据的标题字体加粗
    $('.notCont ul li:lt(3)').children('.notContDivWord').children('.notContDivTitle').attr('style', 'font-weight: 600;');

    //（作业管理 老师） 点击标题栏
    $('.taskContTit ul li').click(function () {
        $(this).addClass('notTitBorder').siblings('li').removeClass('notTitBorder');
    });

    //（作业管理 老师）》查阅页 点击标题
    $('.numberContTit ul li').click(function () {
        $(this).addClass('notTitBorder').siblings('li').removeClass('notTitBorder');
    });

    //（作业管理 老师）》查阅页 最后一个li
    $('.numberContent ul li:nth-child(5n)').attr('style', 'margin-right:0px;');


    //考勤管理 老师 删除弹出框中的取消按钮
    $('.bodyInput1').click(function () {
        $(".close-reveal-modal").click();//关闭弹出框
    });
    //（考勤管理 老师）》编辑考勤  每行最后一个li
    $('.editUl ul li:nth-child(5n)').attr('style', 'margin-right:0px;');

    //（考勤管理 老师）》编辑考勤 ”添加标记状态“
    $('.editSignUL2 li:not(:last-child)').click(function () { //除最后一个li以外所有的li加click事件
        var imgSrc = $(this).children('img').attr('src');
        var imgSrcSpl = imgSrc.split(".")[0] + '.1.png';
        $(".editUl ul li input[type='checkbox']:checked").each(function () {//判断input是否选中
            var sib = $(this).siblings('img').length;//判断同胞是否存在img
            var add = $('<img src=' + imgSrcSpl + '>');
            if (sib > 0) { //如果存在
                $(this).siblings('img').attr('src', imgSrcSpl);//改变同胞img的src
            } else {
                $(this).after(add);//添加拼好的img
            }
            $(this).attr("checked", false); //结束后让选中的input取消选中
        });
    });
    //（考勤管理 老师）》编辑考勤 ”取消标记状态“
    $('.editSignUL2 li:last').click(function () { //最后一个li
        $(".editUl ul li input[type='checkbox']:checked").each(function () {
            var sib = $(this).siblings('img').length;
            if (sib > 0) {
                $(this).siblings('img').remove();
            }
            $(this).attr("checked", false);
        });
    });

    //（考勤管理 老师）》查看结果  每行最后一个li
    $('.seeCon ul li:nth-child(5n)').attr('style', 'margin-right:0px;');

    //考勤管理首页和成绩管理首页.....统一去掉最后一个列表的底线
    $('.testQContTab table tr:last td').attr('style', 'border-bottom: 0')

    //(人员管理  老师)》学生管理  鼠标滑过td现在小人图标
    $('.personTab table tr').mouseover(function () {
        $(this).children('td').children('a').children('.cancelImg').show();
    }).mouseout(function () {
        $(this).children('td').children('a').children('.cancelImg').hide();
    });
    $('.personTab table .addRemarks').mouseover(function () {
        $(this).removeAttr('readOnly');
        $(this).attr('style', 'border:1px solid #ccc');
    }).mouseout(function () {
        $(this).attr('readOnly', 'true');
        $(this).attr('style', 'border:1px solid #fff');
    });

    $('.classmateTd input').mouseout(function () {
        $(this).attr('readonly', 'readonly').attr('style', 'border:0px');
    });
    //（人员管理 老师）》同班老师 '设置是否管理员'
    $('.superviseSpan').click(function () {
        $(this).children('div').toggle('slow');
    });
    $('.classDivHide table tr').mouseover(function () {
        $(this).addClass('classDivHideTrBack');
        var imgSrc = $(this).find('img').attr('src');
        var baiImg = imgSrc.split(".")[0] + '.1.png'
        $(this).find('img').attr('src', baiImg);
    }).mouseout(function () {
        $(this).removeClass('classDivHideTrBack');
        var imgSrc = $(this).find('img').attr('src');
        var baiImg = imgSrc.split(".")[0] + '.png'
        $(this).find('img').attr('src', baiImg);
    });
    $('.confirmStatus').click(function () { //是否取消管理权 点击确认的操作
        $(".close-reveal-modal").click();//关闭窗口
        $('.classDivHide').hide('slow');
    });
    //（人员管理 老师）》同班老师 鼠标滑过td 显示右边下拉框
    $('.personTab table tr').mouseover(function () {
        $(this).children('td').children('.superviseSpan').show();

    }).mouseout(function () {
        $(this).children('td').children('.superviseSpan').hide();
    });

    //（人员管理 老师）》邀请加入 点击左边添加到右边
    $('.joinQueryContL ul li').click(function () {
        var liImg = $(" <img src='images/a_3_1.png'class='deleteLi'>");
        var cloneLi = $(this).clone(false);
        var appendLi = cloneLi.append(liImg);
        $(this).parent().parent().siblings('div').children('ul').append(appendLi);
        $('.deleteLi').click(function () { //点击右边的×删除
            $(this).parent().remove();
        });
    });
    $('.deleteLi').click(function () { //点击右边的×删除
        $(this).parent().remove();
    });

    //(人员管理 老师)点击标题栏
    $('.personTitle ul li').click(function () {
        $(this).addClass('notTitBorder').siblings('li').removeClass('notTitBorder');
    });

    //家长会》实到家长
 //   $('.meetCon ul li:nth-child(6n)').attr('style','margin-right:0px;');

    //家长会议》实到家长  点击删除按钮
    $('.meetClose').click(function () {
        $(this).parent().remove();
    });
    //表单验证
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    $('.formValidation').validationEngine({
        'ruleName': {
            'regex': reg, /* 正则表达式，如果正则能匹配内容表示通过 */
            'alertText': '验证不通过时的提示信息'
        }
    });
});





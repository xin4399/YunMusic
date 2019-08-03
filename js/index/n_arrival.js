$(()=>{
    let cur_list=0, 
        dirction=1;//向左为1, 向右为-1 
    const MAX_LIST=3;
    function light_sub_idc(num){
    $(`.ns_page:eq(${num})`).css({
                                    'zIndex': '1',
                                    'opacity': '1',
                                    'transform': 'translateY(0px)'
                                }).siblings().css({ 
                                    'zIndex': '-1', 
                                    'opacity': '0', 
                                    'transform': 'translateY(-500px)' });
    $(`.ns_list .list li:eq(${num})`).addClass('active').siblings().removeClass('active');
    }
    $('#prev').click(()=>{
        cur_list--;
        if(cur_list<0){
            cur_list=MAX_LIST;
        }
        light_sub_idc(cur_list);
    });
    $('#next').click(() => {
        cur_list++;
        if (cur_list > MAX_LIST) {
            cur_list = 0;
        }
        light_sub_idc(cur_list);
    });
});
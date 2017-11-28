/**
 * Created by 王伟 on 2017/1/22.
 */
/**
 * Created by zzl028 on 2017/1/20.
 */
$(function () {
    $('#table').bootstrapTable({
        columns: [
            {
                field: 'number',
                title: '代理账号'
            },
            {
            field: 'name',
            title: '公司名称',
            events:{
                'click .customer-name':function (e,value,row,index) {
                    alert(1);
                }
            }
        },{
            field: 'response',
            title: '项目负责人'
        },{
                field: 'phone',
                title: '联系电话',
        },{
                field: 'loan',
                title: '剩余贷款',
            },{
                field: 'mainframe',
                title: '带激活主机',
            },{
                field: 'time',
                title: '添加时间',
            }
        ,{
            field: 'operation',
            title: '操作',
            formatter:function (value,row,index) {
                return '<a class="pack">领取</a>'
            },
            events:{
                'click .pack':function (e,value,row,index) {
                    alert(1);
                }
            }
        }],
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: false,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 15,                       //每页的记录行数（*）
        pageList: [15],        //可供选择的每页的行数（*）
        search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: false,                  //是否显示所有的列
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: false,                //是否启用点击选中行
        uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        data:[{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        },{
            "number": "dazuwang123",
            "name": "郑州市爱屋智能家居",
            "response": "xxx",
            "iphone": "256545565656",
            "loan": "1000",
            "mainframe": "0",
            "time": "2016-12-26",
        }]
    });
    // $(document).on('click',function () {
    //     console.log($('#table').bootstrapTable('getSelections'));
    // })

})

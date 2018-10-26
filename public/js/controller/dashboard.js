"use strict";
angular.module('fpm.c.dashboard', ['fpm.service', 'fpm.filter'])
  .controller('DashboardCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
      echarts.init(document.getElementById('device-chart'))
      .setOption({
        title: {
          text: '设备统计',
          subtext: '更新于: 1分钟前',
          textStyle: {
            color: '#fff'
          },
        },
        backgroundColor: '#0c1c2c',
        color: ['#3398DB', '#006666'],
        textStyle: {
          color: '#fff'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['全部', '在线'],
          textStyle: {
            color: '#fff'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['灯具', '监控', 'LED']
        },
        series: [
          {
            name: '全部',
            type: 'bar',
            data: [10, 20, 8]
          },
          {
            name: '在线',
            type: 'bar',
            data: [6, 18, 5]
          }
        ]
      });
    
    
    
      echarts.init(document.getElementById('month-chart'))
      .setOption({
        title: {
          text: '月度能耗',
          subtext: '单位( KW )',
          textStyle: {
            color: '#fff'
          },
        },
        backgroundColor: '#0c1c2c',
        color: ['#3398DB', '#006666', '#666699'],
        textStyle: {
          color: '#fff'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
          data: ['2016', '2017', '2018',],
          textStyle: {
            color: '#fff'
          },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
          {
            name: '2018',
            type: 'bar',
            data: [10, 20, 8, 10, 20, 8, 10, 20, 8, 10, 20, 8]
          },
          {
            name: '2017',
            type: 'bar',
            data: [10, 20, 8, 10, 20, 8, 10, 20, 8, 10, 20, 8]
          },
          {
            name: '2016',
            type: 'bar',
            data: [10, 20, 8, 10, 20, 8, 10, 20, 8, 10, 20, 8]
          },
        ]
      });
    
      echarts.init(document.getElementById('year-chart'))
      .setOption({
        title: {
          text: '年度能耗',
          subtext: '单位( KW )',
          textStyle: {
            color: '#fff'
          },
        },
        backgroundColor: '#0c1c2c',
        color: ['#3398DB', '#006666', '#666699'],
        textStyle: {
          color: '#fff'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['2016', '2017', '2018'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
          {
            type:'bar',
            barWidth: '60%',
            data: [100, 200, 80,]
          },
          
        ]
      });
    
      echarts.init(document.getElementById('alarm-chart'))
      .setOption({
        title : {
            text: '告警类型',
            textStyle: {
              color: '#fff'
            },
        },
        backgroundColor: '#0c1c2c',
        color: ['#3398DB', '#006666', '#666699', '#993333'],
        textStyle: {
          color: '#fff'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: ['网络异常', '市电异常', '设备老化', '其它'],
          textStyle: {
            color: '#fff'
          },
        },
        series : [
          {
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'网络异常'},
              {value:310, name:'市电异常'},
              {value:234, name:'设备老化'},
              {value:135, name:'其它'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    
    }])
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).on('load', function(){$(".loading").fadeOut()})  
$(function () {
    // 确保echarts库已加载
    if (typeof echarts === 'undefined') {
        console.error('ECharts library not loaded');
        return;
    }
    
    // 延迟初始化图表，确保DOM完全加载
    setTimeout(function() {
        try { echarts_1 && echarts_1(); } catch (e) { console.warn('echarts_1 init skipped:', e); }
        try { echarts_2 && echarts_2(); } catch (e) { console.warn('echarts_2 init skipped:', e); }
        try { echarts_3 && echarts_3(); } catch (e) { console.warn('echarts_3 init skipped:', e); }
        try { pe04 && pe04(); } catch (e) { console.warn('pe04 init skipped:', e); }

        try { pe01 && pe01(); } catch (e) { console.warn('pe01 init skipped:', e); }
        try { pe02 && pe02(); } catch (e) { console.warn('pe02 init skipped:', e); }
        try { pe03 && pe03(); } catch (e) { console.warn('pe03 init skipped:', e); }
        try { materialPie && materialPie(); } catch (e) { console.warn('materialPie init skipped:', e); }
    }, 100);
    function echarts_4() {
      var myChart = echarts.init(document.getElementById('echarts4'));
      var data = [{
        "name": "邮件总量",
        "value": 20000
    }, {
        "name": "公文交换",
        "value": 18170
    }, {
        "name": "内部流转",
        "value": 19870
    } ]
   
   
    option = {
   
        color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],

        grid: {
            bottom: 0,
            left: 0,
            right: '0'
        },
        series: [
            // 主要展示层的
            {
                radius: ['30%', '50%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                          formatter: ['{b|{b}}','{c|{c}次}', '{d|同比：{d}%}'].join('\n'),
                         rich: {
                       c: {
                           color: 'rgb(241,246,104)',
                           fontSize: 22,
                           fontWeight:'bold',
                           lineHeight: 25
                       },
                       b: {
                           color: 'rgb(98,137,169)',
                           fontSize: 17,
                           height: 40
                       },
                   },
                       
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 15,
                        length2: 50
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: "民警训练总量",
                data: data,
   
            },
            // 边框的设置
            {
                radius: ['30%', '35%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['60%', '61%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0c2c69'
                        }
                    }
                }]
            },
        ]
    };
     
             myChart.setOption(option);
             window.addEventListener("resize",function(){
                 myChart.resize();
             });
     
       
         }
function echarts_1() {
 var chartDom = document.getElementById('echarts1');
 if (!chartDom) {
   console.error('echarts1 element not found');
   return;
 }
 console.log('echarts1 element found, initializing chart...');
 var myChart = echarts.init(chartDom);
 option = {
  tooltip: {
  trigger: 'item',
  axisPointer: {type: 'shadow'},
  formatter: function(params) {
    return '<div style="text-align: center;"><strong>' + params.name + '</strong><br/>材料专业人才: <span style="color: #fef000; font-weight: bold;">' + params.value + '人</span></div>';
  },
  backgroundColor: 'rgba(0,0,0,0.8)',
  borderColor: '#49bcf7',
  borderWidth: 1,
  textStyle: {
    color: '#fff',
    fontSize: 14
  }
},
legend: {
    x: 'center',
    y: '0',
    icon: 'circle',
    itemGap:8,
    textStyle: {color: 'rgba(255,255,255,.5)'},
    itemWidth: 10,
    itemHeight: 10,
},
grid: {
  left: '0',
    top: '30',
  right: '15',
  bottom: '0',
  containLabel: true
},
xAxis: {
  type: 'category',
  data: ['苏州', '上海', '深圳', '广州', '北京', '重庆'],
  axisLine: {show:false},
 
  axisLabel: {
    textStyle: {
     color:'rgba(255,255,255,.6)',
     fontSize:12
    }
  },
},

yAxis: {
  type: 'value',
  max: 700,
  splitNumber:7,
  axisLine: { show: false },
axisTick: {show: false},
  splitLine: {
    show: true,
    lineStyle: {
      color: 'rgba(255,255,255,0.05)'
    }
  },
  axisLabel:  {
      textStyle: {
        color:'rgba(255,255,255,.6)',
        fontSize:12
                 },
             },
},
series: [ {
  name: '材料专业人才',
  type: 'bar',
  barWidth: '50%',
  itemStyle: {
      normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#49bcf7'
          }, {
              offset: 1,
              color: '#14b6ff'
          }]),
          barBorderRadius: 8,
          shadowBlur: 10,
          shadowColor: 'rgba(73, 188, 247, 0.3)',
          shadowOffsetX: 0,
          shadowOffsetY: 5
      },
      emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#fef000'
          }, {
              offset: 1,
              color: '#ffa500'
          }]),
          barBorderRadius: 8,
          shadowBlur: 20,
          shadowColor: 'rgba(255, 239, 0, 0.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 8
      }
    },
  data: [625, 609, 410, 310, 285, 252]

}]
};

        myChart.setOption(option);
        console.log('echarts1 chart initialized with data:', option.series[0].data);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

	
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '0',
		top: '30',
        right: '20',
        bottom: '-10',
        containLabel: true
    },legend: {
        data: ['字段1', '字段2'],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
       // splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '字段1',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(228, 228, 126, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [600, 200, 600, 200, 400, 200, 400, 300, 400, 300, 400, 300, 200, 400, 200 ]
    }, {
        name: '字段2',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(255, 128, 128, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 128, 128,.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 128, 128, .1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [300, 100, 300, 400, 300, 400, 300, 600, 200, 400, 200, 400, 100, 300, 400]

    }, 

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '0',
		top: '30',
        right: '20',
        bottom: '-10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)',

            }
        }
    }],
    series: [
		{
        name: '标题名称',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        showSymbol: true,
        lineStyle: {
			
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(228, 228, 126, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [600, 200, 600, 200, 400, 200, 400, 300, 400, 300, 400, 300, 200, 400, 200 ]

    }

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe01() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe01'));
        var txt=42
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '20'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '金属材料',
                itemStyle: {
                  normal: {
                    color:'#eaff00',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '其他材料',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe02() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe02'));
        var txt=35
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '20'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '高分子材料',
                itemStyle: {
                  normal: {
                    color:'#ea4d4d',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '其他材料',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe03() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe03'));
        var txt=23
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '20'
              }
            },
            color:'#49bcf7',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '复合材料',
                itemStyle: {
                  normal: {
                    color:'#395ee6',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '其他材料',
                value: 100-txt
              }
            ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe04() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('lastecharts'));
      option = {
    
        tooltip: {
            trigger: 'axis'
        },
        radar: [{
            indicator: [{
                text: '技术创新',
                max: 100
            }, {
                text: '产业规模',
                max: 100
            }, {
                text: '市场需求',
                max: 100
            }, {
                text: '政策支持',
                max: 100
            }, {
                text: '国际竞争力',
                max: 100
            }],
            textStyle: {
                color: 'red'
            },
            center: ['50%', '50%'],
            radius: '70%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
        
            name: {
                padding:-5,
                formatter: '{value}',
                textStyle: {
                  fontSize:16,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.05)'
                }
            }
        }, ],
        series: [{
            name: '雷达图',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [{
                name: '行业平均水平',
                value: [75, 70, 65, 80, 60],
                lineStyle: {
                    normal: { 
                        color:'#03b48e',
                        width:2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#03b48e',
                        opacity:.4
                    }
                },
                symbolSize: 0,
              
            }, {
                name: '材料产业现状',
                value: [85, 90, 75, 85, 70],
                symbolSize: 0,
                lineStyle: {
                    normal: { 
                        color:'#3893e5',
                        width:2,
                    }
                },
                     areaStyle: {
                    normal: {
                        color: 'rgba(19, 173, 255, 0.5)'
                    }
                }
            }]
        }, ]
    };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
  
  // 材料类型分布饼状图
  function materialPie() {
    var chartDom = document.getElementById('materialPie');
    if (!chartDom) {
      console.error('materialPie element not found');
      return;
    }
    console.log('materialPie element found, initializing chart...');
    var myChart = echarts.init(chartDom);
    
    option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
      },
      legend: {
        right: 10,
        top: 30,
        height: 140,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        },
        orient: 'vertical',
        data: ['先进轻合金材料', '先进储能材料', '镁合金', '铝合金', '铜合金', '半导体', '热电材料', '高熵合金']
      },
      calculable: true,
      series: [{
        name: '材料类型',
        color: ['#78fbb2', '#49bcf7', '#fef000', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
        type: 'pie',
        radius: [30, 70],
        center: ['35%', '50%'],
        roseType: 'radius',
        label: {
          normal: {
            show: true,
            formatter: '{b}\n{d}%',
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          emphasis: {
            show: true
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          {value: 8000, name: '先进轻合金材料'},
          {value: 6181, name: '先进储能材料'},
          {value: 4386, name: '镁合金'},
          {value: 4055, name: '铝合金'},
          {value: 2467, name: '铜合金'},
          {value: 2244, name: '半导体'},
          {value: 1898, name: '热电材料'},
          {value: 1484, name: '高熵合金'}
        ]
      }]
    };
    
    myChart.setOption(option);
    console.log('materialPie chart initialized');
    window.addEventListener("resize",function(){
        myChart.resize();
    });
  }
  
})
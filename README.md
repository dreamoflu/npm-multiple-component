###插件使用说明
###注意
#####1、因为插件中调用借口，需要封装一个$postHttp的方法挂载到 vue上
#####2、页面布局使用了rem和sass，mint-ui
###使用方法说明
####1、引用
```js
//引入js和css
import "ydt-private-project/dist/ydtPrivateProject.min.css"
import {searchPage,videoPage,detailPage,resourListPage} from 'ydt-private-project'
Vue.use(searchPage)
Vue.use(videoPage)
Vue.use(detailPage)
Vue.use(resourListPage)

```
####2、各个组件的使用说明
  1、resourLIstPage
  
	<resour-list
		v-if="listParams!=null" 
		@goDetail='goDetail' //跳转到详情页路由
		@goSearch='goSearch'//跳转到搜索页路由
		:title="title" //顶部导航栏
		:themeColor='themeColor'//主题色
		:limit='limit'//上啦加载每次需要后台返回的条数
    :isType='isType'//是否显示类型
		:listParams='listParams'>//调用借口的参数
    
		<resour-list>

传入参数说明
```js
   export default {
   data(){
		   return{
		   title: [
			        {
			         name:"全部",
			          type:""
			        },
			        {
			          name:"视频",
			          type:"1"
			          },
			          {
			          name:"课件",
			          type:"2"
			          },
			          {
			          name:"文献",
			          type:"3"
			          },
			          {
			          name:"病例",
			          type:"4"
			          }
      ],
       themeColor:'#23aae5',
       listParams = {
          entid:'32',//学科id
          code:'', //如果分前后路则传入 code否则传入'' 
          qianlu:'qianlu', //前路code
          houlu:'houlu',//后路code
          isShunt:true  //  分前后路true 不分false 
      }
		   
		   }
   },
   methods:{
   goSearch(){
        this.$router.push()
        },
      goDetail(crid,type){
         this.$router.push({
        name:"",//你的详情页路由的name
        params:{
          crid:crid  //接受参数，必填，次数值也可以写在query中
        },
        query:{
          "type":type ////接受参数，必填
        }
      })

      }
   }
         

 }
```		

2、searchPage使用说明
```js	
    <search-page :coEntid="coEntid"//传入学院id 
    ></search-page>	
```

3.detailPage 使用说明

```js
  <detail-page
      v-if="crtype!=''&&crid!=''"
      :crid='crid' //资源id
      :crtype='crtype' //资源类型
      
      ></detail-page>


//子页面 接受String类型 这两个参数在列表页点击到次页面时，已经通过路由传递过来，直接能获取到
 this.crid = this.$route.params.crid.toString(),
          this.crtype= this.$route.query.type.toString();
```
4、次包中还有videoPage的封装，使用方法暂未整理


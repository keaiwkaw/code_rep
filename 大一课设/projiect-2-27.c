#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#define _print pMove->data.shoppingName,pMove->data.shopkeeperName,pMove->data.timeOfContract,pMove->data.dueTime,pMove->data.chargesForWaterAndElectricity,pMove->data.groundRent,pMove->data.payment,pMove->data.actualPayment,pMove->data.shortPayment
struct shoppingData{
    char shoppingName[50];               //店铺名称
    char shopkeeperName[20];             //店主姓名
    char timeOfContract[30];             //签约时间
    char dueTime[20];                    //到期时间
    double chargesForWaterAndElectricity;//水电费
    double groundRent;                   //地租费
    double payment ;                      //应缴费用
    double actualPayment ;                //实缴费用
    double shortPayment;                //少缴为正值，多缴为负值
};
struct shopping{
  struct shoppingData data;
  struct shopping* next;
};
struct shopping* creatNode(){
    struct shopping* headNode = (struct shopping*)malloc(sizeof(struct shopping));
    headNode->next = NULL;
    return headNode;  //创建一个链表
}
struct shopping* addNode(struct shoppingData data){
     struct shopping* addNode = (struct shopping*)malloc(sizeof(struct shopping));
     addNode->data = data;
     addNode->next = NULL;
     return addNode; //添加一个节点
}
struct shopping* insertNode(struct shopping* headNode,struct shoppingData data){
    struct shopping* newNode = addNode(data);
    newNode->next = headNode->next;
    headNode->next = newNode;
    return newNode;    //新建节点并插入到头节点之后
}
void printNode(struct shopping* headNode){
    struct shopping* pMove;
    pMove = headNode->next;
    printf("\t店铺名称\t\t店主姓名\t签约时间\t到期时间\t水电费\t\t地租费\t\t应缴费用    \t实缴费用\t剩余该缴\n\n");
    while(pMove){
        printf("\t%-20s\t%-10s\t%-10s\t%-10s\t%-10.3f\t%-10.3f\t%-10.3f\t%-10.3f\t%-10.3f\n\n",_print);
        pMove = pMove->next;   //打印整个链表
    }
}
void printMony(struct shopping* headNode){
    struct shopping* pMove;
    pMove = headNode->next;
    printf("\t店铺名称\t\t\t应缴费用\t实缴费用\t剩余该缴\n\n");
    while(pMove){
        printf("\t%-25s\t%-10.3f\t%-10.3f\t%-10.3f\n\n",pMove->data.shoppingName,pMove->data.payment,pMove->data.actualPayment,pMove->data.shortPayment);
        pMove = pMove->next;   //打印整个链表
    }
}
void ExportData(struct shopping *headNode){
    struct shopping *pMove=headNode->next;
    if(pMove==NULL){
        printf("数据为空\n");
    }                                //从头到尾遍历链表，并将数据存入指定文件中
    else{
         FILE* fp;
         fp = fopen("data1.txt","w");
         while(pMove){
             fprintf(fp,"%-45s\t%-10s\t%-10s\t%-10s\t%-10.3f\t%-10.3f\t%-10.3f\t%-10.3f\t%-10.3f\n\n",_print);
             pMove = pMove->next;
         }
         fclose(fp);
         printf("数据导出完成\n");
         getch();
    }
}
struct shopping *shoppingSystem0(){
    FILE *fp = fopen("data1.txt","r");
    struct shopping* shoppingSystem0 = creatNode();
    if(fp==NULL)
    {
                              //读取文件中的信息，并将其赋值给链表的每一个节点
    }
    else{
         
     struct  shoppingData data;
     while(fscanf(fp,"%s%s%s%s%lf%lf%lf%lf%lf",data.shoppingName,data.shopkeeperName,data.timeOfContract,data.dueTime,&data.chargesForWaterAndElectricity,&data.groundRent,&data.payment,&data.actualPayment,&data.shortPayment)!=EOF){
         insertNode(shoppingSystem0,data);
     }
    
   fclose(fp);
    }
     return shoppingSystem0;
}
void deletSearchEditAddNode(struct shopping* headNode,char shoppingName[50],int num){
    struct shopping* fontNode = headNode;
    struct shopping* pMove = headNode->next;
 if(pMove == NULL){                                      //按照商铺名称查询,删除,修改，添加商户信息
        printf("失败，数据为空\n");
        return;
    }
    else
    {
        while(strcmp(pMove->data.shoppingName,shoppingName)!=0){
            fontNode = pMove;
            pMove = pMove->next;
             if(pMove == NULL)
        {
            printf("失败，未找到指定商户\n");
            return ;
        }
        }
       
    }
     if(strcmp(pMove->data.shoppingName,shoppingName)==0){
         switch (num)
         {
         case 1:
         {
              fontNode->next = pMove->next;
          free(pMove);
          printf("删除成功！\n");
         }
             
             break;
         
         case 2:
         {
            
            printf("你查找的商户信息如下：\n\n");
            printf("\t店铺名称\t\t\t店主姓名\t签约时间\t到期时间\t水电费\t\t地租费\t\t应缴费用     \t实缴费用\t剩余该缴\n\n");
            printf("\t%-25s\t%-10s\t%-10s\t%-10s\t%-10.3f\t%-10.3f\t%-10.3f\t%-10.3f\t%-10.3f\n\n",_print);
            printf("输入一个数查询该店铺欠款金额是否超过该数，继续请输入1，返回按其他任意键\n");
            char cl=getch();
            double line;
            
            switch(cl)
            {
                case '1':
                 {   
                    printf("请输入查询金额\n");
                    scanf("%lf",&line);
                    if(pMove->data.shortPayment-line>0)
                    printf("该店铺欠款金额已超过%0.3f\n",line);
                    else printf("该店铺欠款金额尚未超过%0.3f\n",line);
                }
                break;
                default:
                return;
                break;
            }         
         }
             break;
         case 3:
         {
            printf("请输入需要修改的商户信息： 店主姓名 签约时间 到期时间 水电费 地租费 实缴费用 \n");
            scanf("%s %s %s %lf %lf %lf",pMove->data.shopkeeperName,pMove->data.timeOfContract,pMove->data.dueTime,&pMove->data.chargesForWaterAndElectricity,&pMove->data.groundRent,&pMove->data.actualPayment);
            pMove->data.payment = pMove->data.chargesForWaterAndElectricity + pMove->data.groundRent;
            pMove->data.shortPayment = pMove->data.payment - pMove->data.actualPayment;
            printf("数据修改完成\n");
         }
         break;
         case 4:
         {
             printf("此操作将会将您所要添加的数据插入到指定数据之前~\n");
             printf("请输入店铺名称 店主姓名 签约时间 到期时间 水电费 地租费 实缴费用 回车结束\n");
             struct  shoppingData data;
              scanf("%s %s %s %s %lf %lf %lf",data.shoppingName,data.shopkeeperName,data.timeOfContract,data.dueTime,&data.chargesForWaterAndElectricity,&data.groundRent,&data.actualPayment);
            data.payment = data.chargesForWaterAndElectricity + data.groundRent;
            data.shortPayment = data.payment - data.actualPayment;
             insertNode(fontNode, data);//将从键盘上所输入得数据插入到指定节点的前一个结点之后
             printf("添加完成如需继续使用，请返回主菜单继续使用\n");

         }
         break;
         }
         
      }
}
void menu(){
    printf("\n");
    printf("------------------------【商场店面管理系统】------------------------\n\n");
    printf("\t\t1.录入信息\t\t2.查找信息\n\n");
    printf("\t\t3.修改信息\t\t4.添加信息\n\n");
    printf("\t\t5.消费排行\t\t6.打印数据\n\n");
    printf("\t\t7.数据导出\t\t8.信息删除\n\n");
    printf("\t\t0.退出系统\t\t9.收费相关\n\n\t\t\t\t退出系统前别忘了将数据导出哦~~\n\n");  
    printf("--------------------------【欢迎使用本系统】-----------------------------\n");
}
void insign(){
                   //注册与登录找回密码
    struct user{
        char mail[20];
        char num[15];
        char password[15];
    }userData;
    int a =1;
    while(a){
        int b=1;
         FILE *admin = fopen("data2.txt","a+");
    FILE *adminMail = fopen("data3.txt","a+");
        printf("\n\n***********************************************欢迎来到商场店面管理系统***********************************************\n");

    printf("\n\n\t\t\t1.注册\t\t\t2.登录\t\t\t3.找回密码\t\t\t\n");
    char sign = getch(); 
    switch (sign)
    {
    case '1':
    {
        char num1[15];
        char password1[15];
        char password0[15];
        printf("请输入账号：\n");
        scanf("%s",userData.num);
        while(fscanf(admin,"%s %s",num1,password1)!=EOF){
            if(strcmp(num1,userData.num)==0){
                printf("账号已存在，请重新注册\n");  //判断是否已经存在此账号，避免注册账号时重复注册
                b=0;
            }
        }
        if(b){
        rewind(admin);
        printf("请输入邮箱\n");
        scanf("%s",userData.mail);
        printf("请输入密码\n");
        scanf("%s",userData.password);
        printf("请确认密码\n");    //确认密码系统，两次输入密码不同，则不让注册
        scanf("%s",password0);
        
        if(strcmp(userData.password,password0)==0){
            printf("恭喜你注册成功\n");
            fprintf(admin,"%s %s\n",userData.num,userData.password);
            fprintf(adminMail,"%s\n",userData.mail);
        }
        else{
            printf("两次密码不一致，请重新注册\n");
            
        }
        }
       
    }
        break;
    case '2':
    {   
        
        char password2[15];    //登录账号，登录成功则进入菜单
        char num2[15];
        printf("请输入您的账号：");
        scanf("%s",userData.num);
        printf("\n");
        printf("请输入密码：");
        int i=0;
        
   while(1){
      userData.password[i]=getch();
      if(userData.password[i]=='\b'){
          printf("\b \b");
          i--;
      }
      else if (userData.password[i]=='\r'){
          userData.password[i]='\0';
          break;
      }
       else {
		   		printf("*");
		  		i++;
       }    
}
        printf("\n");
        while(fscanf(admin,"%s%s",num2,password2)!=EOF){
            if(strcmp(password2,userData.password)==0&&strcmp(num2,userData.num)==0){
                printf("登录成功\n");
                a=0;
                system("cls");
                return;
            }
        }
        if(fscanf(admin,"%s%s",password2,num2)==EOF){
            printf("账号或密码有误，请重新输入");
        }
            
    }
    break;
    
    case '3':
    {
        char mail3[20];
        char num3[15];
        char password3[15];
        printf("请输入需要找回密码的账号：");
        scanf("%s",userData.num);
        printf("\n");                             //账号和邮箱相对应，则显示账号密码·
        printf("请输入邮箱：");
        scanf("%s",userData.mail);
        printf("\n");
        while(fscanf(adminMail,"%s",mail3)!=EOF){
            while(fscanf(admin,"%s%s",num3,password3)!=EOF){
                if(strcmp(userData.num,num3)==0&&strcmp(userData.mail,mail3)==0){
                    printf("你所查找账号：%s的密码是%s\n",userData.num,password3);
                    b=0;
                    break;
                }
            }
        }
        if(b){
            printf("抱歉！你所查找的账号或邮箱不正确，请重新查找\n");
        }
        
    }
        break;
        default:
        {
            printf("指令有误，请重新输入\n");
        }
        break;

    }
    printf("按任意键返回主菜单\n");
    getch();
    fclose(adminMail);
    fclose(admin);              //切断文件和文件指针
    system("cls");  
    }
    
}
void sortNode(struct shopping *headNode){
	struct shopping *pMove=headNode->next;
	int n=0;
	if(pMove == NULL){
		printf("排序失败，数据为空\n");
		return;
	}
	else
	{
		while(pMove){
			n++;
			pMove = pMove->next;
		}
        
        pMove=headNode->next;
	struct shoppingData _sortNode[n];
	int i = 0,j = 0;
    for(i=0;i<n;i++,pMove=pMove->next){
        _sortNode[i]=pMove->data;
    }
    printf("倒序查看，输入2，正序输入1\n");
   char cj=getch();
   switch (cj)
   {
   case '1':
   {
       for(i=0;i<n-1;i++){                   //冒泡排序
		for(j=0;j<n-1-i;j++){
			 struct shoppingData temp;
			if(_sortNode[j].payment>_sortNode[j+1].payment){
			temp = _sortNode[j];
			_sortNode[j] = _sortNode[j+1];
			_sortNode[j+1] = temp;
            }
		}
	}
   }
       break;
   case '2':
   {
       for(i=0;i<n-1;i++){
		for(j=i+1;j<n;j++){
			 struct shoppingData temp;
			if(_sortNode[i].payment<_sortNode[j].payment){
			temp = _sortNode[i];                            //选择排序
			_sortNode[i] = _sortNode[j];
			_sortNode[j] = temp;
            }
		}
	}
   }
   break;
   default:
   printf("输入错误,数据未排序请返回重新输入\n");
       break;
   }
	
	pMove=headNode->next; i=0;
for(i=0;i<n;i++,pMove=pMove->next){
    pMove->data=_sortNode[i];
}
	}
	printf("已按照应缴费用已排好~~~~\n");
	
}
int main(){
     insign();
    struct shopping* shoppingSystem = shoppingSystem0();
    struct  shoppingData data;
  int a=1;
    while(a){
         menu();
   char ch=getch();
   
    
    switch(ch){
        case '1':
        {
            
        printf("请输入店铺名称 店主姓名 签约时间 到期时间 水电费 地租费 实缴费用 输入-1结束\n");
        while(1){
            scanf("%s",data.shoppingName);
             if(strcmp(data.shoppingName,"-1")==0){
                break;
            }
            scanf("%s %s %s %f %f %f",data.shopkeeperName,data.timeOfContract,data.dueTime,&data.chargesForWaterAndElectricity,&data.groundRent,&data.actualPayment);
            data.payment = data.chargesForWaterAndElectricity + data.groundRent;
            data.shortPayment = data.payment - data.actualPayment;
            getchar();
            insertNode(shoppingSystem, data);
           
        }
        printf("恭喜你，数据录入成功\n");
        }
       
        break;
        case '2':
        {
            printf("请输入要查询的商铺名称\n");
          char name[50];
          scanf("%s",name);
            deletSearchEditAddNode(shoppingSystem,name,2);
            
        }
        break;
        case '0':
        {
           printf("欢迎你再次使用本系统，祝你生活愉快\n");
            a=0;
        }
        break;
        case '5':
        {
            sortNode(shoppingSystem);
        }
        break;
        case '3':
        {
            printf("请输入要修改资料的商户名称\n");
             char name[50];
          scanf("%s",name);
            deletSearchEditAddNode(shoppingSystem,name,3);
        }
        break;
        case '6':
        {
           printNode(shoppingSystem);
        }
        break;
        case '8':
        {
            printf("请输入要删除资料的商户名称\n");
            char name[50] ;
            scanf("%s",name);
            deletSearchEditAddNode(shoppingSystem,name,1);
        }
        break;
        case '4':
        {
            printf("请输入要添加到某个商户之前的商户名称\n");
            char name[50] ;
            scanf("%s",name);
            deletSearchEditAddNode(shoppingSystem,name,4);
        }
        break;
        case '7':
        {
            ExportData(shoppingSystem);
        }
        break;
        case '9':
            {
                printMony(shoppingSystem);
            }
        break;
        default:printf("输入错误，请返回主菜单重新输入\n");
    }
    printf("按任意键返回主菜单\n");
   
    getch();
    system("cls");
    
    }
    
    system("pause");
    return 0;
}
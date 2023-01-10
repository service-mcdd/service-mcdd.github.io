count = 0    #倒计次数
while count < 3:    #在三次以下执行以下任务
    usn = input("用户名：")
    pwd = input("密码：")    #或getpass.getpass("密码：") 或 maskpass.advpass("密码：", mask = "⁕")
    if usn == "admin" and pwd == "admin@54188":    #用户名和密码可以自行修改
        print("你好，管理员！")
        quit()
    else:
        count = count + 1
        print("用户名或密码错误！")
    else:
        print("您的机会次数已用完，请重启本软件！")
        quit()    #退出

(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{433:function(a,s,t){"use strict";t.r(s);var r=t(2),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("mysqldump是MySQL官网的一个逻辑备份工具，适用于数据量不大的备份场景，大量数据备份推荐物理备份工具xtrabackup")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/posts/2022/MySQL数据库备份之xtrabackup.html"}},[a._v("MySQL数据库备份之xtrabackup")])],1)]),a._v(" "),s("h2",{attrs:{id:"数据库备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库备份"}},[a._v("#")]),a._v(" 数据库备份")]),a._v(" "),s("p",[a._v("提示：可以结合rsync将备份文件复制到远程服务器上实现灾备，再使用mysqlbinlog工具同步binlog到远程服务器上以备份增量数据")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/posts/2022/inotifywait＋rsync实现远程文件实时同步.html"}},[a._v("inotifywait＋rsync实现远程文件实时同步")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/posts/2022/MySQL数据库binlog远程实时备份.html"}},[a._v("MySQL数据库binlog远程实时备份")])],1)]),a._v(" "),s("h3",{attrs:{id:"手动备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动备份"}},[a._v("#")]),a._v(" 手动备份")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h127.0.0.1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" 库名 --master-data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" --ignore-table"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("库名.不备份的表名1 --ignore-table"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("库名.不备份的表名2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("/dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" backup.sql.gz\n")])])]),s("h3",{attrs:{id:"自动备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动备份"}},[a._v("#")]),a._v(" 自动备份")]),a._v(" "),s("p",[a._v("全库备份并压缩为gz，保留最近30天")]),a._v(" "),s("p",[a._v("vim /usr/local/scripts/mysql_backup.sh")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BACKUP_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/backups\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("database_backup_\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TIME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%Y%m%d%H%M%S"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BACKUP_DIR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /data/backups\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\nmysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h127.0.0.1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" 库名 --master-data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" --ignore-table"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("库名.不备份的表名1 --ignore-table"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("库名.不备份的表名2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("/dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BACKUP_DIR")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NAME")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TIME")]),a._v(".sql.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BACKUP_DIR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NAME")]),a._v('*.sql.gz"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-type")]),a._v(" f "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-mtime")]),a._v(" +30 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v("\n")])])]),s("p",[a._v("每天定时执行")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0 0 * * * root /usr/local/scripts/mysql_backup.sh'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/crontab\n")])])]),s("h2",{attrs:{id:"数据库恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库恢复"}},[a._v("#")]),a._v(" 数据库恢复")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("zcat backup.sql.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h127.0.0.1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" 库名\n")])])]),s("h2",{attrs:{id:"mysql-binlog基于时间点恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-binlog基于时间点恢复"}},[a._v("#")]),a._v(" MySQL binlog基于时间点恢复")]),a._v(" "),s("p",[a._v("mysqldump备份数据时记录MySQL的binlog日志的文件名称和position（需开启MySQL的binlog）")]),a._v(" "),s("p",[a._v("开启binlog\nvim /etc/my.cnf")]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("mysqld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log_bin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mysql-bin")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("expire_logs_days")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("30")]),a._v("\n")])])]),s("p",[a._v("备份时新增参数"),s("code",[a._v("--master-data=2")]),a._v("以注释的方式记录binlog文件名称和position")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysqldump -uroot -proot test --master-data=2 > backup.sql\n")])])]),s("p",[a._v("head -n 30 backup.sql")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("...\n--\n-- Position to start replication or point-in-time recovery from\n--\n\n-- CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000004', MASTER_LOG_POS=419;\n...\n")])])]),s("p",[a._v("根据binlog基于时间点恢复数据\n注意事项：恢复前关闭binlog日志")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'set sql_log_bin=0'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MASTER_LOG_POS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(" backup.sql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CHANGE MASTER TO"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'END{a=substr($6,index($6,\"=\")+1);a=substr(a,1,length(a)-1);print a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MASTER_LOG_FILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(" backup.sql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CHANGE MASTER TO"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'END{a=substr($5,index($5,\"=\")+2);a=substr(a,1,length(a)-2);print a}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\nmysqlbinlog --start-position"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MASTER_LOG_POS")]),a._v(" --stop-datetime"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2022-07-05 14:13:00"')]),a._v(" /var/lib/mysql/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MASTER_LOG_FILE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" data.sql\nmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" data.sql\nmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'set sql_log_bin=1'")]),a._v("\n")])])]),s("p",[a._v("mysqlbinlog参数说明：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('--base64-output=decode-rows -v         解码为可读的文本，但不能用于恢复\n--start-position=875                   起始pos点\n--stop-position=954                    结束pos点\n--start-datetime="2016-9-25 22:01:08"  起始时间点\n--stop-datetime="2019-9-25 22:09:46"   结束时间点\n--database=test                        指定只恢复test数据库\n')])])]),s("blockquote",[s("p",[a._v("🕑 最后更新时间: 2022-10-16 14:57")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
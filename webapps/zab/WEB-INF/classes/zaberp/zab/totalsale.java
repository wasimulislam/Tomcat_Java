package zaberp.zab;
import java.sql.*;
import java.io.*; 
import javax.servlet.http.*; 
import javax.servlet.*;
 

 
@SuppressWarnings("serial")
public class totalsale extends HttpServlet{
  final String thisName = ""; 
  JDBCpool pool = null;
  public void init(ServletConfig config) throws ServletException {
    super.init(config); 
//    zabInfo.LoadGlobal();
    pool = zabInfo.GetPool(this, thisName);
  }
     protected void doGet(HttpServletRequest requestObj, HttpServletResponse responseObj)
                   throws IOException 
    {
    	 responseObj.setContentType("text/html");
    	 responseObj.setHeader("Cache-Control", "no-cache");
    	 zabInfo zabinfo = new zabInfo();
    	 PrintWriter writer = responseObj.getWriter();
    	 Connection con = null;
    	 Statement stmt = null;
    	 Statement stmt1 = null;
    	 Statement stmt2 = null;
    	 Statement stmt3 = null;
    	 Statement stmt4 = null;
    	 Statement stmt5 = null;
    	 Statement stmt6 = null;
    	 Statement stmt7 = null;
    	 Statement stmt8 = null;
    	 Statement stmt9 = null;
    	 Statement stmt10 = null;
    	 Statement stmt11 = null;
    	 Statement stmt12 = null;
    	 Statement stmt13 = null;
    	 Statement stmt14 = null;
    	 Statement stmt15 = null;
    	 Statement stmt16 = null;
    	 Statement stmt17 = null;
    	 Statement stmt18 = null;
    	 Statement stmt19 = null;
    	 Statement stmt20 = null;
    	 Statement stmt21 = null;
    	 Statement stmt22 = null;
    	 String s ="";
    	 String sql="";
    	 String sql1="";
    	 String sql2="";
    	 String sql3="";
    	 String sql4="";
    	 String sql5="";
    	 String sql6="";
    	 String sql7="";
    	 String sql8="";
    	 String sql9="";
    	 String sql10="";
    	 String sql11="";
    	 String sql12="";
    	 String sql13="";
    	 String sql14="";
    	 String sql15="";
    	 String sql16="";
    	 String sql17="";
    	 String sql18="";
    	 String sql19="";
    	 String sql20="";
    	 String sql21="";
    	 String sql22="";
		/**** GETTING PARAMETER FROM URL/SCREEN ********************/
		sql = "select top 6 xtornum from imtorheader";
		sql1 = "select top 6 xtotamt from imtorheader";
		sql2 = "select top 6 xtotamt from imtorheader where isnull(xtotamt,0)<>0 order by xfwh desc";
		sql3 = "select distinct xmonthyear,xyear,xmonth from calenderview where zid = '200010' and cast(xdate as date) between '2022-01-19' and '2022-06-26' order by xyear,xmonth  OPTION (MAXRECURSION 0)";
		sql4 = "select sum(xval)/100000 as tval from sqcamtview where zid = '200010' and xstatusgrn='Confirmed' and left(xgrnnum,4)='SQC-' group by month(xdate),year(xdate)";
		sql5 = "select sum(xamount*xexch)/1000000 as val from woview where zid = '200010' group by month(xdate),year(xdate)";
		sql6 = "select xlong from totinvenview where zid = '200010' and left(isnull(xdocnum,''),2)<>'RR' and xgtype <>'PP&E' group by xlong";
		sql7 = "select sum(xval)/1000000 as amount from totinvenview where zid = '200010' and  left(isnull(xdocnum,''),2)<>'RR' and  xgtype <>'PP&E' group by xlong";
		sql8 = "select xlong from totinvenview where zid = '200010' and left(isnull(xdocnum,''),2)<>'RR' and xgtype <>'PP&E' and xsign<0  group by xlong";
		sql9 = "select sum(xval*xsign)/1000000 as amount from totinvenview where zid = '200010' and left(isnull(xdocnum,''),2)<>'RR' and  xgtype <>'PP&E' and xsign<0  group by xlong";
		sql10 = "select distinct xmonthyear,xyear,xmonth from calenderview where zid = '200010' and cast(xdate as date) between '2021-09-19' and '2022-04-26' order by xyear,xmonth  OPTION (MAXRECURSION 0)";
		sql11 = "select sum(xval)/1000000 as tval from localstockview where zid = '200010' and LEFT(ximtrnnum,4)='PO--' and xgtype <>'PP&E' AND xtype<>'LC'  group by month(xdate),year(xdate)";
		sql12 = "select sum(xval)/1000000 as val from localstockview where zid = '200010' and LEFT(ximtrnnum,4)='PO--' and xgtype <>'PP&E' AND xtype='LC' group by month(xdate),year(xdate)";
		sql13 = "select distinct xmonthyear,xyear,xmonth from calenderview where zid = '200010' and cast(xdate as date) between '2021-10-19' and '2022-05-26' order by xyear,xmonth  OPTION (MAXRECURSION 0)";
		sql14 = "select sum(xval)/1000000 as tval from purchaseamt1view where  zid = '200010' and left(xpornum,2) ='PO' and xstatus='Approved' AND xtype<>'LC' group by month(xdate),year(xdate)";
		sql15 = "select sum(xval)/1000000 as val from purchaseamt1view where zid = '200010' and left(xpornum,2) ='PO' and xstatus='Approved' AND xtype='LC' group by month(xdate),year(xdate)";
		sql16 = "select distinct xmonthyear,xyear,xmonth from calenderview where zid = '200010' and cast(xdate as date) between '2021-09-19' and '2022-04-26' order by xyear,xmonth  OPTION (MAXRECURSION 0)";
		sql17 = "select sum(xbase)/1000000 as tval from poamtassetview where zid = '200010' group by month(xdate),year(xdate)";
		sql18 = "select sum(xval)/1000000 as val from grnamtassetview where zid = '200010' group by month(xdate),year(xdate)";
		sql19 = "select distinct xmonthyear,xyear,xmonth from calenderview where zid = '200010' and cast(xdate as date) between '2022-01-02' and '2022-06-26' order by xyear,xmonth  OPTION (MAXRECURSION 0)";
		sql20 = "select sum(xamount)/1000000 as tval from powoview where zid = '200010' and xstatus='Approved' and left(xpornum,3)='PO-' group by month(xdate),year(xdate)";
		sql21 = "select ABS(sum(xval*xsign)/1000000) as sval from grnamtview where  zid = '200010' and xsign>0 group by month(xdate),year(xdate)";
		sql22 = "select ABS(sum(xval*xsign)/1000000) as val from grnamtview where  zid = '200010' and xsign<0 group by month(xdate),year(xdate)";
System.out.println(sql7);
		
		//		System.err.println(sql1);
		ResultSet rs = null;
		ResultSet rs1 = null;
		ResultSet rs2 = null;
		ResultSet rs3 = null;
		ResultSet rs4 = null;
		ResultSet rs5 = null;
		ResultSet rs6 = null;
		ResultSet rs7 = null;
		ResultSet rs8 = null;
		ResultSet rs9 = null;
		ResultSet rs10 = null;
		ResultSet rs11 = null;
		ResultSet rs12 = null;
		ResultSet rs13 = null;
		ResultSet rs14 = null;
		ResultSet rs15 = null;
		ResultSet rs16 = null;
		ResultSet rs17 = null;
		ResultSet rs18 = null;
		ResultSet rs19 = null;
		ResultSet rs20 = null;
		ResultSet rs21 = null;
		ResultSet rs22 = null;
    try {
        con = pool.getConnection();
      } catch (Exception esql) {
      	zabinfo.log("zErr0002msg",esql.getMessage(),"Return Code = 0");
      }

    try { 
        stmt = con.createStatement();
        rs = stmt.executeQuery(sql);
        
        stmt3 = con.createStatement();
        rs3 = stmt3.executeQuery(sql3);
        
        stmt6 = con.createStatement();
        rs6 = stmt6.executeQuery(sql6);
        
        stmt8 = con.createStatement();
        rs8 = stmt8.executeQuery(sql8);
        
        stmt10 = con.createStatement();
        rs10 = stmt10.executeQuery(sql10);
        
        stmt13 = con.createStatement();
        rs13 = stmt13.executeQuery(sql13);
        
        stmt16 = con.createStatement();
        rs16 = stmt16.executeQuery(sql16);
        
        stmt19 = con.createStatement();
        rs19 = stmt19.executeQuery(sql19);
        
        s += "<script src=\"chart.js\"></script>";
        s +="<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" "
        		+ "rel=\"stylesheet\" integrity=\"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx\" crossorigin=\"anonymous\">";
        s+="<link rel=\"stylesheet\" href=\"style.css\">";
        s+="<div class=\"container\">\r\n"
        		+ "      <div class=\"card-deck d-flex justify-content-center m-3 p-3\">\r\n"
        		+ "        <div class=\"card bg-primary m-3 p-3\">\r\n"
        		+ "          <div class=\"card-body text-center\">\r\n"
        		+ "           <p class=\"card-text\">Some text inside the second card</p>\r\n"
        		+ "          </div>\r\n"
        		+ "        </div>\r\n"
        		+ "        <div class=\"card bg-warning m-3 p-3\">\r\n"
        		+ "          <div class=\"card-body text-center\">\r\n"
        		+ "            <p class=\"card-text\">Some text inside the second card</p>\r\n"
        		+ "          </div>\r\n"
        		+ "        </div>\r\n"
        		+ "        <div class=\"card bg-success m-3 p-3\">\r\n"
        		+ "          <div class=\"card-body text-center\">\r\n"
        		+ "            <p class=\"card-text\">Some text inside the third card</p>\r\n"
        		+ "          </div>\r\n"
        		+ "        </div>\r\n"
        		+ "        <div class=\"card bg-danger m-3 p-3\">\r\n"
        		+ "          <div class=\"card-body text-center \">\r\n"
        		+ "            <p class=\"card-text\">Some text inside the fourth card</p>\r\n"
        		+ "          </div>\r\n"
        		+ "        </div>  \r\n"
        		+ "      </div>\r\n"
        		+ "    </div>";
        s+="<div class=\"container_fluid\">\r\n"
        		+ "        <div class=\"row\">\r\n"
        		+ "            <div class=\"col-sm-6\">\r\n"
        		+ "                <canvas id=\"totalsale\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "                <canvas id=\"SQCVSWO\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "              <canvas id=\"totalinventory\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "              <canvas id=\"totalinventorycons\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "              <canvas id=\"totalstock\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "              <canvas id=\"totalpurchase\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "              <canvas id=\"POVSGRN\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "             <br>"
        		+ "            <div class=\"col-sm-6 p-4\">\r\n"
        		+ "              <canvas id=\"POVSGRNVSCOM\"></canvas>\r\n"
        		+ "            </div>\r\n"
        		+ "         </div>\r\n"
        		+ "        </div>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"totalsale\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs.next()){
        	String xtornum = rs.getString("xtornum");
	    	s+="\""+xtornum+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Sales\",\r\n"
		+ "        backgroundColor: ['rgb(128, 237, 153)'],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt1 = con.createStatement();
        rs1 = stmt1.executeQuery(sql1);
        while (rs1.next()){
	    	String xtotamt = rs1.getString("xtotamt");
	    	s+=""+xtotamt+",";
		}
		s+= "]"
		+ "      },"
		+ "{"
		+ "            label: \"AMT\",\r\n"
		+ "            backgroundColor: [\"#a6b8ed\"],\r\n"
		+ "            borderColor: \"#ffff\",\r\n"
		+ "            data: [";
		stmt2 = con.createStatement();
        rs2 = stmt2.executeQuery(sql2);
        while (rs2.next()){
	    	String xtotamt = rs2.getString("xtotamt");
	    	s+=""+xtotamt+",";
		}
		s+= "]\r\n"
		+ "          }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'Custom Chart Title'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'sales'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'sales'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "            }"
		+ "});";
		
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"SQCVSWO\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs3.next()){
        	String xmonthyear = rs3.getString("xmonthyear");
	    	s+="\""+xmonthyear+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"WO Amount\",\r\n"
		+ "        backgroundColor: [\"#67cfcb\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt4 = con.createStatement();
        rs4 = stmt4.executeQuery(sql4);
        while (rs4.next()){
	    	String tval = rs4.getString("tval");
	    	
	    	s+=""+tval+",";
	    	
		}
        s+= "]"
        + "      },"
        + "{"
        + "            label: \"SQC Amount\",\r\n"
		+ "            backgroundColor: [\"#f56975\"],\r\n"
        + "            borderColor: \"#ffff\",\r\n"
        + "            data: [";
        
        stmt5 = con.createStatement();
        rs5 = stmt5.executeQuery(sql5);
        while (rs5.next()){
        	 String val = rs5.getString("val");
        	 s+=""+val+",";
        }
		s+= "]\r\n"
		+ "          }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'SQC Vs WO'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Millions)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Month-Year'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"totalinventory\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs6.next()){
        	String xlong = rs6.getString("xlong");
	    	s+="\""+xlong+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Inventory\",\r\n"
		+ "        backgroundColor: [\"#3e95cd\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
		+ "        data: [";
        
        stmt7 = con.createStatement();
        rs7 = stmt7.executeQuery(sql7);
        while (rs7.next()){
	    	String amount = rs7.getString("amount");
	    	
	    	s+=""+amount+",";
	    	
		}
         
         
		s+= "]"
		+ "      }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'Total Inventory VALUE In BDT(Million)'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "                indexAxis: 'y',\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Store'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Million)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "\r\n"
		+ "                },\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"totalinventorycons\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs8.next()){
        	String xlong = rs8.getString("xlong");
	    	s+="\""+xlong+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Inventory Consumption\",\r\n"
		+ "        backgroundColor: [\"#FFCBCB\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
		+ "        data: [";
        
        stmt9 = con.createStatement();
        rs9 = stmt9.executeQuery(sql9);
        while (rs9.next()){
	    	String amount = rs9.getString("amount");
	    	
	    	s+=""+amount+",";
	    	
		}
         
         
		s+= "]"
		+ "      }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'Total Inventory Consumption In BDT(Million)'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "                indexAxis: 'y',\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Store'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Million)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "\r\n"
		+ "                },\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"totalstock\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs10.next()){
        	String xmonthyear = rs10.getString("xmonthyear");
	    	s+="\""+xmonthyear+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Local Amount\",\r\n"
		+ "        backgroundColor: [\"#6f42c1\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt11 = con.createStatement();
        rs11 = stmt11.executeQuery(sql11);
        while (rs11.next()){
	    	String tval = rs11.getString("tval");
	    	
	    	s+=""+tval+",";
	    	
		}
        s+= "]"
        + "      },"
        + "{"
        + "            label: \"Foreign Amount\",\r\n"
		+ "            backgroundColor: [\"#97D2EC\"],\r\n"
        + "            borderColor: \"#ffff\",\r\n"
        + "            data: [";
        
        stmt12 = con.createStatement();
        rs12 = stmt12.executeQuery(sql12);
        while (rs12.next()){
        	 String val = rs12.getString("val");
        	 s+=""+val+",";
        }
		s+= "]\r\n"
		+ "          }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'Purchase Amount In BDT'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Millions)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Month-Year'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"totalpurchase\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs13.next()){
        	String xmonthyear = rs13.getString("xmonthyear");
	    	s+="\""+xmonthyear+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Local Amount\",\r\n"
		+ "        backgroundColor: [\"#96E5D1\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt14 = con.createStatement();
        rs14 = stmt14.executeQuery(sql14);
        while (rs14.next()){
	    	String tval = rs14.getString("tval");
	    	
	    	s+=""+tval+",";
	    	
		}
        s+= "]"
        + "      },"
        + "{"
        + "            label: \"Foreign Amount\",\r\n"
		+ "            backgroundColor: [\"#FFC18E\"],\r\n"
        + "            borderColor: \"#ffff\",\r\n"
        + "            data: [";
        
        stmt15 = con.createStatement();
        rs15 = stmt15.executeQuery(sql15);
        while (rs15.next()){
        	 String val = rs15.getString("val");
        	 s+=""+val+",";
        }
		s+= "]\r\n"
		+ "          }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'PO vs GRN'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Millions)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Month-Year'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"POVSGRN\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs16.next()){
        	String xmonthyear = rs16.getString("xmonthyear");
	    	s+="\""+xmonthyear+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Local Amount\",\r\n"
		+ "        backgroundColor: [\"#3B9AE1\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt17 = con.createStatement();
        rs17 = stmt17.executeQuery(sql17);
        while (rs17.next()){
	    	String tval = rs17.getString("tval");
	    	
	    	s+=""+tval+",";
	    	
		}
        s+= "]"
        + "      },"
        + "{"
        + "            label: \"Foreign Amount\",\r\n"
        + "            backgroundColor: [\"#72d681\"],\r\n"
        + "            borderColor: \"#ffff\",\r\n"
        + "            data: [";
        
        stmt18 = con.createStatement();
        rs18 = stmt18.executeQuery(sql18);
        while (rs18.next()){
        	 String val = rs18.getString("val");
        	 s+=""+val+",";
        }
		s+= "]\r\n"
		+ "          }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'SQC VS WO'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Millions)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Month-Year'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script>";
        s+="new Chart(document.getElementById(\"POVSGRNVSCOM\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs19.next()){
        	String xmonthyear = rs19.getString("xmonthyear");
	    	s+="\""+xmonthyear+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"PO Amount\",\r\n"
		+ "        backgroundColor: [\"#607EAA\"],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt20 = con.createStatement();
        rs20 = stmt20.executeQuery(sql20);
        while (rs20.next()){
	    	String tval = rs20.getString("tval");
	    	
	    	s+=""+tval+",";
	    	
		}
        s+= "]"
        + "      },"
        + "{"
        + "            label: \"GRN Amount\",\r\n"
		+ "            backgroundColor: [\"#AF7AB3\"],\r\n"
        + "            borderColor: \"#ffff\",\r\n"
        + "            data: [";
        
        stmt21 = con.createStatement();
        rs21 = stmt21.executeQuery(sql21);
        while (rs21.next()){
        	 String sval = rs21.getString("sval");
        	 s+=""+sval+",";
        }
        s+= "]"
                + "      },"
                + "{"
                + "            label: \"Consumtion Amount\",\r\n"
        		+ "            backgroundColor: [\"#72d681\"],\r\n"
                + "            borderColor: \"#ffff\",\r\n"
                + "            data: [";
        
        stmt22 = con.createStatement();
        rs22 = stmt22.executeQuery(sql22);
        while (rs22.next()){
        	 String val = rs22.getString("val");
        	 s+=""+val+",";
        }
		s+= "]\r\n"
		+ "          }"
		+ "    ]"
		+ "  },"
		+ "options: {\r\n"
		+ "                plugins: {\r\n"
		+ "                    title: {\r\n"
		+ "                        display: true,\r\n"
		+ "                        text: 'PO vs GRN vs Consumption'\r\n"
		+ "                    }\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "                scales: {\r\n"
		+ "\r\n"
		+ "                    y: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Amount BDT(Millions)'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                    x: {\r\n"
		+ "                        title: {\r\n"
		+ "                            display: true,\r\n"
		+ "                            text: 'Month-Year'\r\n"
		+ "\r\n"
		+ "                        }\r\n"
		+ "                    },\r\n"
		+ "                },\r\n"
		+ "\r\n"
		+ "            }"
		+ "});";
	
        s+="</script>";
        
        s+="<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa\" crossorigin=\"anonymous\"></script>";
      }catch(SQLException esql){
      	zabinfo.log("zErr0002msg",esql.getMessage(),"Return Code = 0");
      }finally{
        try {
          if (stmt != null) stmt.close();
        }catch(SQLException esql){
        } 
  //     System.err.println(s);
        writer.println(s);
      }
    pool.releaseConnection(con);
      writer.close();
  }
}
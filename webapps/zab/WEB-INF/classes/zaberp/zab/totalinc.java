package zaberp.zab;
import java.sql.*;
import java.io.*; 
import javax.servlet.http.*; 
import javax.servlet.*;
 

@SuppressWarnings("serial")
public class totalinc extends HttpServlet{
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
    	 String s ="";
    	 String sql="";
    	 String sql1="";
		/**** GETTING PARAMETER FROM URL/SCREEN ********************/
		sql = "select top 15 xdornum from opdoheader";
//		System.err.println(sql);
		sql1 = "select top 15 xtotamt from opdoheader";
//		System.err.println(sql1);
		ResultSet rs = null;
		ResultSet rs1 = null;
    try {
        con = pool.getConnection();
      } catch (Exception esql) {
      	zabinfo.log("zErr0002msg",esql.getMessage(),"Return Code = 0");
      }

    try { 
        stmt = con.createStatement();
        rs = stmt.executeQuery(sql);
        s += "<script src=\"chart.js\"></script>";
        s+="<div>"
        		+ "<canvas id=\"totalsale\"></canvas>"
        + "</div>";
        s+="<script>";
        s+="new Chart(document.getElementById(\"totalincome\"), {\r\n"
    		+ "  type: 'bar',\r\n"
    		+ "  data: {\r\n"
    		+ "    labels: [";

        while (rs.next()){
        	String xdornum = rs.getString("xdornum");
	    	s+="\""+xdornum+"\",";
		}
        
        s+="],\r\n"
		+ "    datasets: [\r\n"
		+ "      {\r\n"
		+ "        label: \"Bill Amount\",\r\n"
		+ "        backgroundColor: ['rgb(34, 87, 122)',\r\n"
		+ "          'rgb(56, 163, 165)',\r\n"
		+ "          'rgb(87, 204, 153)',\r\n"
		+ "          'rgb(128, 237, 153)'],\r\n"
		+ "        borderColor: \"#ffff\",\r\n"
        + "        data: [ ";
        
        stmt1 = con.createStatement();
        rs1 = stmt1.executeQuery(sql1);
        while (rs1.next()){
	    	String xtotamt = rs1.getString("xtotamt");
	    	
	    	s+=""+xtotamt+",";
	    	
		}
		s+= "]"
		+ "      }"
		+ "    ]"
		+ "  },"
		+ "});";
	
        s+="</script>";
//        s+="  <script>\r\n"
//		+ "    new Chart(document.getElementById(\"totalsale\"), {\r\n"
//		+ "      type: 'bar',\r\n"
//		+ "      data: {\r\n"
//		+ "        labels: [\"SO22020000001\", \"SO22020000002\", \"SO22020000003\", \"SO22020000004\", \"SO22020000005\", \"SO22020000006\", \"SO22020000007\",],\r\n"
//		+ "        datasets: [{\r\n"
//		+ "          label: \"AMT\",\r\n"
//		+ "          backgroundColor: ['rgb(124, 83, 201)',\r\n"
//		+ "            'rgb(190, 83, 201)',\r\n"
//		+ "          ],\r\n"
//		+ "          borderColor: \"#ffff\",\r\n"
//		+ "          data: [329346.00, 307389.60, 256158.00, 333005.40, 252498.60, 334225.20,]\r\n"
//		+ "        }]\r\n"
//		+ "      }, options: {\r\n"
//		+ "        legend: { display: false },\r\n"
//		+ "        title: {\r\n"
//		+ "          display: true,\r\n"
//		+ "          text: 'Predicted world population (millions) in 2050'\r\n"
//		+ "        },\r\n"
//		+ "      }\r\n"
//		+ "    });\r\n"
//		+ "  </script>";
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
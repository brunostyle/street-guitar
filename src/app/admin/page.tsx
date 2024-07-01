import { Spacer } from "@nextui-org/react";
import { DashboardCards, Sells, LayoutAdmin, Chart, FullScreenLoading } from "../../components";
import { SectionTitle } from "../../styles";
// import { useDashboard } from "../../hooks";
import { dashboard as data } from "../../assets/database.json";
const isLoading = false;

const Dashboard = () => {
   // const { data, isLoading } = useDashboard({ key: "dashboard", path: "/dashboard" });
   return (
      <LayoutAdmin title="Dashboard" showTitle={false}>
         {isLoading  
            ? <FullScreenLoading />
            :
            <div className="dashboard">
               <div className="cards">
                  <SectionTitle>Balance</SectionTitle>
                  <Spacer y={2} />
                  <DashboardCards numberOfClients={data?.numberOfClients} numberOfProducts={data?.numberOfProducts} numberOfOrders={data?.numberOfOrders} />
               </div>
               <div className="sells">
                  <SectionTitle>Ultimas ventas</SectionTitle>
                  <Spacer y={2} />
                  <Sells sells={data?.lastSells} />
               </div>
               <div className="chart">
                  <SectionTitle>Estadisticas</SectionTitle>
                  <Spacer y={2} />
                  <Chart clients={data?.chart.clients} sells={data?.chart.sells} />
               </div>
            </div>
         }
      </LayoutAdmin>
   )
}

export default Dashboard;
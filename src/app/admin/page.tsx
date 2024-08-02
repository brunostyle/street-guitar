import { Spacer } from "@nextui-org/react";
import { DashboardCards, Sells, LayoutAdmin, Chart, FullScreenLoading } from "@components";
import { SectionTitle } from "@styles";
import { useDashboard } from "@hooks";

const Dashboard = () => {
   const { numberOfClients, numberOfProducts, numberOfOrders, lastSells, clients, sells, isLoading } = useDashboard();
   return (
      <LayoutAdmin title="Dashboard">
         {isLoading
            ? <FullScreenLoading />
            :
            <div className="dashboard">
               <div className="cards">
                  <SectionTitle>Balance</SectionTitle>
                  <Spacer y={2} />
                  <DashboardCards
                     numberOfClients={numberOfClients}
                     numberOfProducts={numberOfProducts}
                     numberOfOrders={numberOfOrders}
                  />
               </div>
               <div className="sells">
                  <SectionTitle>Ultimas ventas</SectionTitle>
                  <Spacer y={2} />
                  <Sells sells={lastSells} />
               </div>
               <div className="chart">
                  <SectionTitle>Estadisticas</SectionTitle>
                  <Spacer y={2} />
                  <Chart clients={clients} sells={sells} />
               </div>
            </div>
         }
      </LayoutAdmin>
   )
}

export default Dashboard;
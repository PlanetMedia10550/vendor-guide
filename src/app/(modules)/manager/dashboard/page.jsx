import Graph from "@/components/Front/NewRegionalmanagerDashboard/Graph";
import Sideli from "@/components/Common/Sideli";
import TabComponent from "@/components/Front/TabComponent";

const Dashboard =  () => {
  
  return (
    <>
      <section className="top_grid">
        <div className="px-20">
          <div className="grid grid-cols-3 sm:gap-16 ">
          
            <Sideli />
            <Graph />
          </div>
        </div>
      </section>
      <section className="pt-14">
        <div className="px-10">
          <TabComponent/>
        </div>
      </section>
    </>
  );
};


export default Dashboard;
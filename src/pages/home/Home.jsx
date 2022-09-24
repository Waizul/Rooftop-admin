import { Charts, Container, HomeContainer, TableContainer, Tables, TablesTitle, Widgets } from "./homeStyle"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import LatestTransactions from "../../components/table/LatestTransactions"

const Home = () => {
  
  return (
    <Container>
      <Sidebar />
      <HomeContainer>
        <Navbar />
        <Widgets>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </Widgets>
        <Charts>
          <Featured />
          <Chart title='Last 6 Months (Revenue)' aspect={2/1} />
        </Charts>
        <Tables>
          <TablesTitle>Latest Transactions</TablesTitle>
           <LatestTransactions />
        </Tables>
      </HomeContainer>
    </Container>
  )
}

export default Home
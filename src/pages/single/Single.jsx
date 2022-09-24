import {Container, Wrapper} from '../../globalStyles'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Bottom, DetailItem, Details, EditButton, Image, Item, ItemKey, ItemTitle, ItemValue, Left, Right, Title, Top } from './singleStyle'
import Chart from '../../components/chart/Chart'
import LatestTransactions from '../../components/table/LatestTransactions'

const Single = () => {
  return (
    <Container>
     <Sidebar />
     <Wrapper>
      <Navbar />

      <Top>
        <Left>
          <EditButton>Edit</EditButton>
          <Title>Information</Title>

          <Item>
            <Image src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=''
            />
            <Details>
              <ItemTitle>Lane Doe</ItemTitle>
              <DetailItem>
                <ItemKey>Email:</ItemKey>
                <ItemValue>lanedoe@gmail.com</ItemValue>
              </DetailItem>
              <DetailItem>
                <ItemKey>Phone:</ItemKey>
                <ItemValue>+880 123 456</ItemValue>
              </DetailItem>
              <DetailItem>
                <ItemKey>Address:</ItemKey>
                <ItemValue>Elton St. 234 Garden Yd. NewYork</ItemValue>
              </DetailItem>
              <DetailItem>
                <ItemKey>Country:</ItemKey>
                <ItemValue>USA</ItemValue>
              </DetailItem>
              </Details> 
          </Item>
        </Left>

        <Right>
          <Chart aspect={3/1} title='User Spending( Last 6 Month )' />
        </Right>
      </Top>

      <Bottom>
        <Title>Last Transactions</Title>
        <LatestTransactions />
      </Bottom>
      </Wrapper> 
    </Container>
  )
}

export default Single
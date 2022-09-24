import {Container, Wrapper} from '../../globalStyles'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <Datatable />
      </Wrapper>
    </Container>
  )
}

export default List
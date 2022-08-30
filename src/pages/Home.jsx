
import Layout from '../components/Layout'
import Header from '../components/Header/Header'
import AddBtnArea from '../components/AddBtnArea'
import TodoList from '../components/todo/TodoList'



const Home = () => {



  return (
    <div>
      <Header/>
      <Layout>
    
  <AddBtnArea/>
   <TodoList/>
   </Layout>

    </div>
   
  )
}

export default Home
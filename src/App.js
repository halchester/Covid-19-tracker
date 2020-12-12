import React from 'react';
import { Cards ,Charts,CountryPicker,Social } from './components'
import styles from './App.module.css'
import { fetchData } from './api/index'
import coronaImage from './imgs/covid.jpeg'

class App extends React.Component{

  state = {
    data : {},
    country: "",
  }

  async componentDidMount  (){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    console.log(fetchedData)
    this.setState({data : fetchedData, country : country})
  }

  render(){

    return(
      <div className = {styles.container}>
        <img className = {styles.image}src = {coronaImage} alt = "COVID19"></img>
        <Cards data = {this.state.data}></Cards>
        <CountryPicker handleCountryChange = {this.handleCountryChange}></CountryPicker>
        <Charts data = {this.state.data} country = {this.state.country}></Charts>
        <Social></Social>
      </div>
    )
  }
}
export default App
import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import ValueBox from '../commom/widget/valueBox'
import Row from '../commom/layout/row'

class Dashborad extends Component {
  render(){
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
                      value='R$ 10' text='Total de Creditos' />
            <ValueBox cols='12 4' color='red' icon='credit-card'
                      value='R$ 10' text='Total de Débitos' />
            <ValueBox cols='12 4' color='blue' icon='money'
                      value='R$ 0' text='Valor Consolidado' />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashborad
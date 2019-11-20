import React from 'react';
import './fundriser-item.styles.scss'
import ProgressBar from '../progress-bar/progress-bar.component'
class FundriserItem extends React.Component {
   constructor() {
      super();
      this.handleClick = (e) => {
         console.log('i am clicked')
      }
   }
   componentDidMount() {
      
   }
   clickedView = () =>{
     console.log(this.props.item._id);
   }



   render() {
      return (
         <div className='featured__item'>
            <div className='featured__item__image_div'>
               <img src={this.props.item.image == undefined ? "https://via.placeholder.com/350x200" : "https://enigmatic-fortress-52205.herokuapp.com" + this.props.item.image} alt="" />
            </div>
            <div className='featured__item__location'>
               <h3 className='featured__item__location__text'>{this.props.item.city},{this.props.item.country}</h3>
            </div>
            <div className='featured__item__title'>
               <h3 className='featured__item__title__text'>{this.props.item.title} </h3>
            </div>
            <div className='featured__item__content'>
               <p className='featured__item__content__text'>{this.props.item.description}</p>
            </div>
            <ProgressBar></ProgressBar>
            <div className='featured__item__raised'>
               <p className='featured__item__raised__text'><b>0$ raised </b> from {this.props.item.goalMoney}</p>
            </div>
            <div className='featured__item__buttons'>
               <div className='featured__item__buttons__view' onClick={ this.clickedView }  >
                  <h3>View</h3>
               </div>
               <div className='featured__item__buttons__donate' >
                  <h3>Donate</h3>
               </div>
            </div>
         </div>
            )
          }
          
          }
          export default FundriserItem;
            

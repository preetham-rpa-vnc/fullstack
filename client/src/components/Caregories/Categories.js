import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from './CategoryCard';
import CategoryItemCard from './CtaegoryItemCard';
import redTreactor from '../../Assets/redTractor.jpg';
import SpecificationCard from './SpecificationCard';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Categories(){
    let categoryItems = [{header:'Related category', text1:'Tractor Front End loader', text2:'Agricultural Machinery',
                          text3:'Tow Tractor'}]
    let brandItems = [{header:'Related Brands', text1:'Mahindra', text2:'Swaraj', text3:'Massey Ferguson',
                          text4:'Sonalika'}]
    let categoryItems1 = [{img: redTreactor, text: 'Second hand & Used Tractor'},
                          {img: redTreactor, text: 'Compact Tractor'},
                          {img: redTreactor, text: 'Mini Tractor'},
                          {img: redTreactor, text: 'Mini Tractor'},
                        ]
    let popularItems = [{img: redTreactor, text: 'Indo Farm Tractor, 3 Cylinder', price:'2 Lakhs / Unit', text2:'RBAS Global Training'},
                          {img: redTreactor, text: 'Sonalika Worldtractor, Dual Clutch Plate', price:'11 Lakhs / Unit', text2:'RBAS Global Training'},
                          {img: redTreactor, text: 'New Holland Tractor',price:'5.6 Lakhs / Unit', text2:'RBAS Global Training'},
                          {img: redTreactor, text: 'New Holland Tractor',price:'5.6 Lakhs / Unit', text2:'RBAS Global Training'},
                        ]
    let specificationItems = [{img: redTreactor, header:'Mahindra 275 TU DI SP Plus Tractor', brand:'Mahindra', cylinders:'3 Cylinder', liftingCapacity:'1500kg',
                                modalNameNo:'275 TU DI SP Plus', gears:'8F + 2R', transmissionType:'Partial Constant Mesh'},
                                {img: redTreactor, header:'Mahindra 275 TU DI SP Plus Tractor', brand:'Mahindra', cylinders:'3 Cylinder', liftingCapacity:'1500kg',
                                modalNameNo:'275 TU DI SP Plus', gears:'8F + 2R', transmissionType:'Partial Constant Mesh'},
                                {img: redTreactor, header:'Mahindra 275 TU DI SP Plus Tractor', brand:'Mahindra', cylinders:'3 Cylinder', liftingCapacity:'1500kg',
                                modalNameNo:'275 TU DI SP Plus', gears:'8F + 2R', transmissionType:'Partial Constant Mesh'},
                                {img: redTreactor, header:'Mahindra 275 TU DI SP Plus Tractor', brand:'Mahindra', cylinders:'3 Cylinder', liftingCapacity:'1500kg',
                                modalNameNo:'275 TU DI SP Plus', gears:'8F + 2R', transmissionType:'Partial Constant Mesh'}]                    
    return(
        <div>
            <Grid container spacing={12}>
                <Grid item lg={2} xs={12} md={2}>
                    <div className="category-div">
                        <CategoryCard items={categoryItems}/>
                        <div style={{marginTop:'15%'}}>
                            <CategoryCard items={brandItems}/>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={10} xs={12} md={10}>
                    <div style={{marginLeft:'4%'}}>
                        <p className="categories-header">Categories to explore</p>
                        <Grid container spacing={12}>  
                        {categoryItems1.map((value,i)=>{
                            return(
                            <Grid item lg={3} xs={12} md={3}>
                                <CategoryItemCard item={value}/>
                            </Grid>
                            )
                        })}                     
                        </Grid>
                   
                        <p className="categories-header" style={{color:'#055B13'}}>Popular Tractor Products</p>
                        <Grid container spacing={12}>  
                        {popularItems.map((value,i)=>{
                            return(
                            <Grid item lg={3} xs={12} md={3}>
                                <CategoryItemCard item={value}/>
                            </Grid>
                            )
                        })}                     
                        </Grid>

                        <Grid container spacing={12}>  
                        {specificationItems.map((value,i)=>{
                            return(
                            <Grid item lg={6} xs={12} md={6}>
                                <SpecificationCard item={value}/>
                            </Grid>
                            )
                        })}                     
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
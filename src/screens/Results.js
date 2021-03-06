import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  Dimensions,
  Image,
  Button,
  ScrollView,
  ViewPropTypes

} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {BarChart} from 'react-native-charts-wrapper';
import { ClipPath } from 'react-native-svg';

import { Auth } from 'aws-amplify';

// const GREEN = processColor('#71BD6A');
// const RED = processColor('#D14B5A');

const GREEN = processColor('darkgreen');
const RED = processColor('darkred');

const GREY = processColor('#0E1936');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const testvalue = 12;

class BarChartScreen extends React.Component {


  constructor() {
    super();

    this.state = {
      description: {
        text: ''
      },
      legend: {
        enabled: false,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5
      },
      data1: {
        dataSets: [{
          values: [{y: 0.40}],
          label: 'Bar dataSet',
          config: {
            colors: [GREEN],
            barSpacePercent: 90,
            barShadowColor: processColor('white'),
            highlightAlpha: 0,
            highlightColor: processColor('white'),
            valueTextSize: 15,
            valueTextColor: processColor('white'),
            valueFormatter: "#.## yrs"
          }
        }],
        config: {
          barWidth: 0.6,

        }
          // group: {
          //   fromX: number, // required
          //   groupSpace: number, // required
          //   barSpace: number // required
          // }
      },
      data2: {
        dataSets: [{
          values: [{y: -0.1}, {y: -0.2}, {y: 0.7}, {y: -0.02}, {y: -0.05}, {y: 0.03}],
          label: 'Bar dataSet',
          config: {
            colors: [RED, RED, GREEN, RED, RED, GREEN],
            barSpacePercent: 10,
            barShadowColor: processColor('white'),
            highlightAlpha: 0,
            highlightColor: processColor('white'),
            valueTextSize: 12,
            valueTextColor: processColor('white'),
            valueFormatter: "#.## yrs"


          }
        }],
        config: {
          barWidth: 0.5
        }
          // group: {
          //   fromX: number, // required
          //   groupSpace: number, // required
          //   barSpace: number // required
          // }
      },
      highlights: [{x: 3}, {x: 6}],
      xAxis1: {
        valueFormatter: ['TOTAL SHIFT'],
        granularityEnabled: true,
        granularity : 1,
        textSize: 18,
        textColor: processColor('white'),
        fontWeight: '900',
        drawGridLines: false,
        drawAxisLine: false,
        yOffset: 10,

    
      },
      xAxis2: {
        valueFormatter: ['SLEEP', 'DIET', 'EXERCISE', 'STRESS', 'AIR', 'ALLERGY'],
        granularityEnabled: true,
        granularity : 1,
        textSize: 15,
        textColor: processColor('white'),
        drawGridLines: false,
        drawAxisLine: false,
        yOffset: 15,

    
      },
      
      yAxis1: {
        left: {
          axisMaximum: .8,
          axisMinimum: -.8,
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
          zeroLine: {
            enabled: true,
            lineWidth: 1,
            lineColor: processColor('white')
          },
        },
        right: {
          enabled: false
        }
      },
      yAxis2: {
        inverted: true,
        left: {
          axisMaximum: .8,
          axisMinimum: -.8,
          labelCount: 3,
          textSize: 10,
          textColor: processColor('lightslategrey'),
          drawLabels: true,
          drawAxisLine: false,
          drawGridLines: true,
          
          axisLineColor: processColor('red'),

          gridLineWidth: 0.5,
          zeroLine: {
            enabled: true,
            lineWidth: 1,
            lineColor: processColor('white')
          },
          gridDashedLine: {
            lineLength: 4,
            spaceLength: 8,
            phase: 1,
            }
        },
        right: {
          enabled: false
        }
      }

      
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (

<ScrollView>
      <LinearGradient 
            //colors={['#061419', '#14141f', 'black', '#14141f', '#061419']}
            colors={['#080911', '#061419', '#14141f', '#061419', 'black']}

            //style={{flex: 1}}
            >

        <View 
            //colors={['white', 'blue']}
            style={{
              //height: windowHeight, 
              //backgroundColor: 'white'
              }}>

            <View style={{
                          flex: 1
                          }}>

                <View >
                    {/* <Text style={{color: 'white'}}> selected entry</Text>
                    <Text style={{color: 'white'}}> {this.state.selectedEntry}</Text> */}
                    <Text 
                        style={{
                            color: "white", 
                            height: 60, 
                            textAlign: 'left', 
                            textAlignVertical: 'center', 
                            fontSize: 20, 
                            fontWeight: 'bold',
                            paddingLeft: 20,
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 1,
                            textShadowColor: 'gray',
                        }}>
                        RESULTS</Text>

                    <View style={{alignSelf: "center"}}>
                        <Text 
                            style={{
                                color: "deepskyblue", 
                                height: 90, 
                                textAlign: 'center', 
                                textAlignVertical: 'center', 
                                fontSize: 60, 
                                fontWeight: 'bold',
                                textShadowOffset: { width: 1, height: 1 },
                                textShadowRadius: 1,
                                textShadowColor: 'white',
                                //paddingLeft: 20,
                                //textDecorationLine: 'underline'
                            }}>
                            DNAge</Text>

                            <Text 
                            style={{
                                color: "white", 
                                height: 75, 
                                textAlign: 'center', 
                                textAlignVertical: 'center', 
                                fontSize: 50, 
                                fontWeight: 'bold',
                                //paddingLeft: 20,
                                //textDecorationLine: 'underline'
                                textShadowOffset: { width: 1, height: 1 },
                                textShadowRadius: 1,
                                textShadowColor: 'deepskyblue',
                            }}>
                            32.5</Text>

                            <Text 
                            style={{
                                color: "lightsteelblue", 
                                height: 30, 
                                textAlign: 'center', 
                                textAlignVertical: 'center', 
                                fontSize: 15, 
                                //fontWeight: 'bold',
                                //paddingLeft: 20,
                                //textDecorationLine: 'underline'
                            }}>
                            years</Text>
                    </View>

                    <View style={{height: 20}}></View>
                </View>

                <View style={{flex: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-around',}}>


                    <View style={{width: windowWidth/2}}>
                        <Text 
                        style={{
                            color: "deepskyblue", 
                            height: 40, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 25, 
                            fontWeight: 'bold',
                            //paddingLeft: 20,
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: .4, height: .4 },
                            textShadowRadius: 1,
                            textShadowColor: 'white',
                        }}>
                        AGING RATE</Text>

                        <Text 
                        style={{
                            color: "white", 
                            height: 53, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 30, 
                            fontWeight: 'bold',
                            //paddingLeft: 20,
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: .4, height: .4 },
                            textShadowRadius: 1,
                            textShadowColor: 'deepskyblue',
                        }}>
                        1.3</Text>

                        <Text 
                        style={{
                            color: "lightsteelblue", 
                            height: 20, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 12, 
                            //fontWeight: 'bold',
                            //paddingLeft: 20,
                            //textDecorationLine: 'underline'
                        }}>
                        years / year</Text>
                    </View>

                    <View style={{width: windowWidth/2}}>
                        <Text 
                        style={{
                            color: "deepskyblue", 
                            height: 40, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 25, 
                            fontWeight: 'bold',
                            //paddingLeft: 20,
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: .4, height: .4 },
                            textShadowRadius: 1,
                            textShadowColor: 'white',
                        }}>
                        AGE SHIFT</Text>

                        <Text 
                        style={{
                            color: "white", 
                            height: 53, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 30, 
                            fontWeight: 'bold',
                            //paddingLeft: 20,
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: .4, height: .4 },
                            textShadowRadius: 1,
                            textShadowColor: 'deepskyblue',
                        }}>
                        0.2</Text>

                        <Text 
                        style={{
                            color: "lightsteelblue", 
                            height: 20, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 12, 
                            //fontWeight: 'bold',
                            //paddingLeft: 20,
                            //textDecorationLine: 'underline'
                        }}>
                        years older</Text>
                    </View>

                </View>

            </View >


          </View>


                                            
          <View style={{
                        //height: windowHeight, 
                        //flex: 1, 
                        //backgroundColor: 'black'
                        }}>
            <View style={{height: 20}}></View>
              <View style={{}}>
                <Text 
                        style={{
                            //backgroundColor: 'black',

                            color: "white", 
                            height: 90, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 25, 
                            //paddingLeft: 20,
                            fontWeight: 'bold',
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: .4, height: .4 },
                            textShadowRadius: 1,
                            textShadowColor: 'white',
                            }}>
                        Overview</Text>
                </View>

                <View style={{}}>
                  <Text style={{color: 'white', textAlign: 'justify', paddingHorizontal: 20}}>
                        The DNAge?? robustly detects epigenetic changes to determine biological
                         age based on the aging clock built by UCLA professor Dr. Steve Horvath.
                          Epigenetics is gene regulatory information layered on top of DNA. The
                           reversible and dynamic nature of epigenetic marks makes DNAge?? an ideal test to monitor lifestyle interventions.
                              {"\n"}{"\n"}
                           The DNAge?? robustly detects epigenetic changes to determine biological
                         age based on the aging clock built by UCLA professor Dr. Steve Horvath.
                          Epigenetics is gene regulatory information layered on top of DNA. The
                           reversible and dynamic nature of epigenetic marks makes DNAge?? an ideal test to monitor lifestyle interventions.
                  </Text>
                </View>


            </View>

            <View style={{flex: 1,}}>
                  <View style={{height: 20,}}>
                            {/* <Text style={{height: 200, backgroundColor: 'black'}}>
                              aaa
                            </Text> */}
                  </View>
                  <Text 
                      style={{
                          //backgroundColor: 'black',

                          color: "deepskyblue", 
                          height: 90, 
                          textAlign: 'center', 
                          textAlignVertical: 'center', 
                          fontSize: 25, 
                          //paddingLeft: 20,
                          fontWeight: 'bold',
                          //textDecorationLine: 'underline'
                          textShadowOffset: { width: .4, height: .4 },
                          textShadowRadius: 1,
                          textShadowColor: 'white',
                          }}>
                      AGE SHIFT & LIFESTYLE</Text>


              <View style={{flexDirection: 'row'}}>
                        
                        
                        <View style={{flex:1}}>
                            <View style={{  
                                    //flex:1,
                                    //transform : [ { rotate: '270deg'}],   
                                    //width: '25%',
                                    //backgroundColor: 'black',
                                        }}>
                                <Text style={{ 
                                          //flex: 1,
                                          //backgroundColor: 'black',
                                          width: 150,
                                          transform : [ { rotate: '-90deg'},
                                                        {translateX: -70},
                                                        {translateY: -65}
                                                      ],
                                          fontSize: 13, 
                                          color: 'white'}}>
                                      Older     Younger
                                  </Text>
                              </View>
                          </View>

                        <BarChart
                            doubleTapToZoomEnabled={false}
                            dragEnabled={false}
                            // drawBorders={false}
                            // borderWidth={0}
                            // borderColor={RED}
                            style={styles.chart1}
                            data={this.state.data1}
                            xAxis={this.state.xAxis1}
                            yAxis={this.state.yAxis1}
                            //animation={{durationY: 2000}}
                            legend={this.state.legend}
                            description={{text: ''}}
                            //gridBackgroundColor={processColor('white')}
                            visibleRange={{x: { min: 1, max: 1 }}}
                            drawBarShadow={false}
                            drawValueAboveBar={true}
                            drawHighlightArrow={true}
                            onSelect={this.handleSelect.bind(this)}
                            highlights={this.state.highlights}
                            onChange={(event) => console.log(event.nativeEvent)}
                            chartDescription={{text: ''}}

                          />

                          <BarChart
                            doubleTapToZoomEnabled={false}
                            drawBorders={false}
                            borderWidth={1}
                            borderColor={RED}
                            style={styles.chart2}
                            data={this.state.data2}
                            xAxis={this.state.xAxis2}
                            yAxis={this.state.yAxis2}
                            //animation={{durationX: 2000, durationY: 2000}}
                            legend={this.state.legend}
                            description={{text: ''}}
                            gridBackgroundColor={processColor('white')}
                            visibleRange={{x: { min: 3, max: 3 }}}
                            drawBarShadow={false}
                            drawValueAboveBar={true}
                            drawHighlightArrow={true}
                            onSelect={this.handleSelect.bind(this)}
                            highlights={this.state.highlights}
                            onChange={(event) => console.log(event.nativeEvent)}
                            chartDescription={{text: ''}}
                          />
                      </View>

                </View>

                <View style={{
                        //height: windowHeight, 
                        //flex: 1, 
                        //backgroundColor: 'black'
                        }}>
            <View style={{height: 2}}></View>
              <View style={{}}>
                <Text 
                        style={{
                            //backgroundColor: 'black',

                            color: "white", 
                            height: 90, 
                            textAlign: 'center', 
                            textAlignVertical: 'center', 
                            fontSize: 25, 
                            //paddingLeft: 20,
                            fontWeight: 'bold',
                            //textDecorationLine: 'underline'
                            textShadowOffset: { width: .4, height: .4 },
                            textShadowRadius: 1,
                            textShadowColor: 'white',
                            }}>
                        Age Shift & Lifestyle Overview</Text>
                </View>

                <View style={{}}>
                  <Text style={{color: 'white', textAlign: 'justify', paddingHorizontal: 20}}>
                        The DNAge?? robustly detects epigenetic changes to determine biological
                         age based on the aging clock built by UCLA professor Dr. Steve Horvath.
                          Epigenetics is gene regulatory information layered on top of DNA. The
                           reversible and dynamic nature of epigenetic marks makes DNAge?? an ideal test to monitor lifestyle interventions.
                              {"\n"}{"\n"}
                           The DNAge?? robustly detects epigenetic changes to determine biological
                         age based on the aging clock built by UCLA professor Dr. Steve Horvath.
                          Epigenetics is gene regulatory information layered on top of DNA. The
                           reversible and dynamic nature of epigenetic marks makes DNAge?? an ideal test to monitor lifestyle interventions.
                  </Text>
                </View>


            </View>

      </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'black'
    
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    //height:(2.8*windowHeight/6),
    //justifyContent: 'space-around',
    //backgroundColor: 'blue',
    //width: windowWidth
  },
  chart1: {
    flex: 12,
    height: (1.4*windowHeight/5),
    // width: (0.9*windowWidth/3)
  },
  chart2: {
    flex: 25,
    height: (1.4*windowHeight/5),
    // width: (0.9*2*windowWidth/3)
    //backgroundColor: 'white'
  }
});

export default BarChartScreen;

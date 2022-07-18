/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <View style={{backgroundColor: 'rgb(190,190,200)', padding: 12}}>
          <Text style={{alignSelf: 'center'}}>hello</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'rgb(133,66,199)',
              flex: 1,
            }}>
            <Text style={{}}>1</Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <Text style={{alignSelf: 'flex-end'}}>2</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgb(100,116,139)',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{alignSelf: 'center'}}>3</Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              flex: 1,
            }}>
            <Text>4</Text>
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 1,
              }}>
              <Text style={{alignSelf: 'flex-end'}}>5</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgb(223,200,159)',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Text>6</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{alignSelf: 'flex-start'}}>7</Text>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text style={{alignSelf: 'flex-end'}}>8</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{alignSelf: 'flex-end'}}>9</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'brown'}}>
            <View style={{flex: 1}}>
              <Text style={{alignSelf: 'flex-end'}}>10</Text>
            </View>
            <Text>11</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'orange', flex: 2}}>
            <Text>12</Text>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={{alignSelf: 'flex-end'}}>13</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'aqua',
              flex: 4,
              justifyContent: 'center',
            }}>
            <Text style={{alignSelf: 'center'}}>14</Text>
          </View>
          <View style={{backgroundColor: 'lightgray', flex: 2}}>
            <Text>15</Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <Text style={{alignSelf: 'flex-end'}}>16</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{backgroundColor: 'pink', flex: 1, flexDirection: 'row'}}>
            <Text style={{alignSelf: 'flex-end'}}>17</Text>
          </View>
          <View style={{backgroundColor: 'rgb(80,80,70)', flex: 2}}>
            <Text style={{alignSelf: 'flex-end'}}>18</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgb(33,66,99)',
              flex: 4,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text style={{alignSelf: 'center'}}>21</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                height: '100%',
                width: '100%',
                alignItems: 'flex-end',
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text>19</Text>
              </View>
              <Text>20</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(190,190,200)', padding: 12}}>
          <Text style={{alignSelf: 'center'}}>Thank You</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

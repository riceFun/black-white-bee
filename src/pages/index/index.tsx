//https://blog.csdn.net/qq_43569119/article/details/113418895  taro小程序快速创建
// import { Component } from 'react'
import React from 'react'
import { View, Text, Button, } from '@tarojs/components'
import './index.scss'

interface Props {

}

export default function Index(props: Props) {
  const [name, setName] = React.useState('ding');
  const [listData, setListData] = React.useState(['1', '2', '3', '4', '2', '3', '4', '2', '3', '4', '2', '3', '4']);
  const [oneLineItemNums, setOneLineItemNums] = React.useState(3);
  const lineItemNums = [3, 4, 5];

  const onclick = () => {
    setName('gang');
  }

  React.useEffect(() => {
    console.log(name);
  }, [name]);

  const clickImportBtn = () => {
    console.log('导入');
  }

  const clickNumsItem = () => {

  }

  return <View className='main' onClick={onclick}>
    <View className='top-bar'>
      <View className='import-btn' onClick={clickImportBtn}>
        导入图片
      </View>
      <View className='num-of-item-bar'>
        {lineItemNums.map((item, index) => {
          return <View className='item' key={index}>{item}</View>
        })}
      </View>
    </View>
    {listData.map((data, index) => {
      return <View className='image-item' key={index}>{data}</View>
    })}
  </View>
}

// export default class Index extends Component {

//   componentWillMount() { }

//   componentDidMount() { }

//   componentWillUnmount() { }

//   componentDidShow() { }

//   componentDidHide() { }

//   render() {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }

import React from 'react'

import * as S from './styles'
import { SafeAreaProvider } from "react-native-safe-area-context";
import Input from '../../components/Input';
import SearchCard from '../../components/SearchCard';
import { FlatList, ScrollView } from 'react-native'
import { items } from '../../components/SearchCard/mock/items'

const Explore: React.FC = () => {
    return (
        <S.Container>
            <ScrollView>

                <SafeAreaProvider>
                    <S.Header>
                        <S.TextHeader>Find Products</S.TextHeader>
                        <Input />
                    </S.Header>

                    <S.BoxContent>
                        <FlatList
                            data={items}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => (
                                <SearchCard
                                    image={item.image}
                                    title={item.title}
                                    color={item.color}
                                    border={item.border}
                                    widthImg={item.width}
                                    heightImg={item.height}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            onEndReachedThreshold={0.1}
                        />
                    </S.BoxContent>
                </SafeAreaProvider>
            </ScrollView>
        </S.Container>
    )
}

export default Explore
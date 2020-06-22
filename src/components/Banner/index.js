import React from 'react';
import { BannerContainer, Details, Option, Label, Title, Description, Image } from './styles';

import img from '../../images/13.png';

export default function Banner() {
    return (
        <BannerContainer>
            <Details>
                <Title>Compre o que quiser sem sair de casa</Title>
                <Description>
                    Conheça nossos serviços, lojas, produtos, entre outros, ao visitar a Store.
                    </Description>
                <Option>
                    <Label>Comprar itens</Label>
                </Option>
            </Details>
            <Image source={img} />
        </BannerContainer>
    );
}
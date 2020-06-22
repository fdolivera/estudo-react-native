import React from 'react';
import { TipsContainer, Option, TipsHeader, TipsImage } from './styles';

import tips_image8 from '../../images/08.png';
import tips_image9 from '../../images/09.png';
import tips_image10 from '../../images/10.png';
import tips_image11 from '../../images/11.png';
import tips_image12 from '../../images/12.png';

const tips = [
    {
        key: String(Math.random()),
        img: tips_image8,
        label: 'Saiba como pagar um boleto',
        color: '#172c4a',
    },
    {
        key: String(Math.random()),
        img: tips_image9,
        label: 'Pague suas contas sem sair de casa',
        color: '#342c4a',
    },
    {
        key: String(Math.random()),
        img: tips_image10,
        label: 'Faça uma doação',
        color: '#172c41',
    },
    {
        key: String(Math.random()),
        img: tips_image11,
        label: 'Cobre um amigo',
        color: '#2e45f1',
    },
    {
        key: String(Math.random()),
        img: tips_image12,
        label: 'Recarregue sem sair de casa',
        color: '#4ef2c3',
    },
];

export default function Tips(){
    return (
        <TipsContainer horizontal>
           {tips.map((tip) => (
                <Option key={tip.key} bgColor={tip.color}>
                    <TipsHeader>{tip.label}</TipsHeader>
                    <TipsImage source={tip.img} />
                </Option>
           ))}
        </TipsContainer>
    );
}
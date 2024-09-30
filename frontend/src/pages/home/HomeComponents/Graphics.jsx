import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import style from '../Home.module.css';


const Graphics = () => {
    const { t } = useTranslation();

    const salesData = [
        { name: t('auction.month.may'), sales: 30 },
        { name: t('auction.month.jun'), sales: 50 },
        { name: t('auction.month.jul'), sales: 45 },
        { name: t('auction.month.aug'), sales: 80 },
        { name: t('auction.month.sep'), sales: 70 },
    ];

    return (
        <div className={style.Charts}>
            <Typography className={style.saleTitle}>{t('auction.total-sales')}</Typography>
            <ResponsiveContainer width="99%" height={300}>
                <LineChart data={salesData}>
                    <Line type="monotone" dataKey="sales" stroke="#806903" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Graphics;
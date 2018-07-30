import React from 'react';

const dotToComma = str => `${str}`.replace('.', ',');
const addPrefix = str => `R$ ${str}`;
const convertToBrl = str => addPrefix(dotToComma(str)); // @todo: apply some compose implementantion

const ToBRL = props => <span>{convertToBrl(props.children)}</span>;

export default ToBRL;

import React from 'react';
import { getAntStatus } from '../config/utils';
import '../assets/ant.css';

export default function AntItem({ data, status }) {
  let status_class = 'ant-item-status';
  switch (getAntStatus(status, data.likelihood)) {
    case 'In progress':
      status_class = 'ant-item-status in-progress';
      break;
    case 'Caculated':
      status_class = 'ant-item-status completed';
      break;
  }
  return (
    <div className="ant-item">
      <div
        className="ant-type"
        style={{
          backgroundColor: data.color,
        }}
      />
      <div className="ant-item-name">{data.name}</div>
      <div className={status_class}>
        {getAntStatus(status, data.likelihood)}
      </div>
      <div className="ant-item-likelihood">
        {data.likelihood ? data.likelihood : ''}
      </div>
    </div>
  );
}

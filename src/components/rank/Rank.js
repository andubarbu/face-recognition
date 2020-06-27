import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div className='pa3 br4 shadow-5 center-vertical ranked'>
            <div className='white f3'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;
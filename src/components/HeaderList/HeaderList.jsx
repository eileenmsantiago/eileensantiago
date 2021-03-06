import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Heading from '../Heading/Heading';

const HeaderList = (props) => {

    const { list } = props;

    return(
        <div className="row header-list">
            {list.map(process => (
                <div className="col-sm-6 col-md-3 col-lg-2 block-container">
                    <Heading level="h3" style="h4" color="black" weight="semi">
                        {process.title}
                    </Heading>
                        {process.descriptionList.map(description => (
                        <>
                            <Paragraph color="grey" weight="lt">{description}</Paragraph>
                        </>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default HeaderList;
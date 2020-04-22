import React, {Component} from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3>
                    Office Phone and Fax Numbers
                </h3>
                <p>
                    Office Phone (562) 863-4808
                    <br/><br/>
                    Fax Number (562) 863-0898
                </p>
                <h3>
                    Tax Preparer's Emails
                </h3>
                <p>
                    Richard J Cavish Enrolled Agent: rcavish@nbs-tax.com
                    <br/><br/>
                    Donald J Cavish CTEC: dcavish@nbs-tax.com
                    <br/><br/>
                    Brenan J Cavish Enrolled Agent: bcavish@nbs-tax.com
                </p>
                <h3>
                    Bookkeepers
                </h3>
                <p>
                    Carolina Diaz: cdiaz@nbs-tax.com
                </p>
                <h3>
                    Office Email
                </h3>
                <p>
                    nbsinc@nbs-tax.com
                </p>
                <h3>Our Physical Address</h3>
                <p>
                    We are located at 11924 Firestone Blvd between Paddison Ave and Pioneer Blvd. Due to construction on
                    the 5 freeway, the southbound Pioneer Blvd and the northbound Firestone exits are both closed. We
                    recommend using the Norwalk Blvd exit as a Northbound alternate and Imperial Highway as a Southbound
                    alternate.
                    <br/><br/>
                    <a target=""
                       href="http://maps.google.com/maps?hl=en&amp;q=11924+Firestone+Boulevard,+Norwalk,+CA&amp;um=1&amp;ie=UTF-8&amp;hq=&amp;hnear=11924+Firestone+Blvd,+Norwalk,+CA+90650&amp;gl=us&amp;ei=HywRTem8J5HmsQPq7LC2Cg&amp;sa=X&amp;oi=geocode_result&amp;ct=title&amp;resnum=1&amp;ved=0CBMQ8gEwAA">
                        A Link to our location on Google Maps</a>
                    <br/><br/>
                    Our office is upstairs. If you cannot make it up the stairs, please call (562) 863-4808 and let your
                    accountant know. We have a fully functioning office downstairs in which our accountants can prepare
                    your taxes.
                </p>
            </div>
        );
    }
}

export default ContactInfo;

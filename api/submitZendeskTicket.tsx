export const submitZendeskTicket = async (
  primaryData: any,
  extraFields: any,
  workOrders: any
) => {
  const subdomain = process.env.NEXT_PUBLIC_ZENDESK_SUBDOMAIN;
  const formData = { ...primaryData, ...extraFields };
  const comment = Object.keys(formData).reduce(function (res, key) {
    return res.concat(` ${key} : ${formData[key]}, `);
  }, '');

  const orderType = workOrders.filter((order: any) => {
    return order.id.toString() == primaryData.work_task_id;
  })[0].name;

  const data = {
    request: {
      requester: {
        name: primaryData['name'],
        email: primaryData['email'],
      },
      custom_fields: [
        {
          id: 360026831397, //Tupack field for Brand name
          value: 'TBC',
        },
      ],
      subject: `WMS New Order: ${primaryData['brand_entry']} | ${orderType} #${primaryData['tracking_id']}`,
      comment: {
        body: comment,
      },
    },
  };

  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch(
      `https://${subdomain}.zendesk.com/api/v2/requests.json`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error('Zendesk Ticket Creation error');
  }
};

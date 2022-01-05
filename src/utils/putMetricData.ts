import { Auth } from 'aws-amplify';
import { Metric } from 'web-vitals';
import { CloudWatchClient, PutMetricDataCommand, PutMetricDataInput, Dimension } from "@aws-sdk/client-cloudwatch";

let client: any;

const createClient = async () => {
    const creds = await Auth.currentCredentials();

    client = new CloudWatchClient({ 
        region: "eu-west-1", 
        credentials: Auth.essentialCredentials(creds),
    });
};

const putMetricData =  async (name: string, value: number, dimensions: Dimension[], unit: string = 'Milliseconds' ) => {
    if (!client) {  // called once
        await createClient();
    }

    const input: PutMetricDataInput = {
        MetricData: [
            {
              MetricName: name,
              Dimensions: dimensions,
              Timestamp: new Date(),
              Unit: unit,
              Value: value,
            },
        ],
        Namespace: 'Notes App',
    };
    
    const command = new PutMetricDataCommand(input);

    await client.send(command);
};

export const publishWebVitals = (metric: Metric) => {
    const { name, value } = metric;
    const dimensions = [
        {
            Name: 'Type',
            Value: 'Performance',
        }
    ];

    putMetricData(name, value, dimensions);
};

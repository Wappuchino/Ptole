import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import {Code, Function, Runtime} from 'aws-cdk-lib/aws-lambda';
import {Vpc} from 'aws-cdk-lib/aws-ec2';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PtoleInfrastructureStack extends Stack {
  readonly itemTypeStore: Table;
  readonly vpc: Vpc;
  readonly apiLambda: Function;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, 'Vpc', {});

	this.itemTypeStore = new Table(this, 'ItemTypeStore', {
		partitionKey: {
			name: 'id',
			type: AttributeType.NUMBER
		}
	});
	
	this.apiLambda = new Function(this, 'ApiLambda', {
		runtime: Runtime.NODEJS_12_X,
		handler: 'index.handler',
		code: Code.fromAsset('path'),
		vpc: this.vpc
	});

    // example resource
    // const queue = new sqs.Queue(this, 'PtoleInfrastructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

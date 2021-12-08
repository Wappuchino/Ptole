import { Stack, StackProps } from 'aws-cdk-lib/aws';
import { Construct } from 'constructs';
import { DatabaseCluster } from 'aws-cdk-lib/aws-docdb';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { InstanceClass, InstanceSize, InstanceType, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PtoleInfrastructureStack extends Stack {
  readonly cluster: DatabaseCluster;
  readonly vpc: Vpc;
  readonly apiLambda: Function;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, 'Vpc', {});
	
    this.cluster = new DatabaseCluster(this, 'MainStore', {
		masterUser: {
			username: 'ptolemaster'
		},
		instanceType: InstanceType.of(InstanceClass.MEMORY5, InstanceSize.LARGE),
		vpcSubnets: {
			subnetType: SubnetType.PUBLIC
		},
		vpc: this.vpc
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

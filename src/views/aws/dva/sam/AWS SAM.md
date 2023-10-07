# AWS Serverless Application

### AWS SAM là gì?

AWS SAM là một open source frame work được thiết kế để quá trình phát triển và deploy các ứng dụng server less được xuyên suốt trên AWS, giúp tối ginả việc tạo và quản lý tài nguyên.

Lợi ích:

- Được tích hợp với các IDE
- Local testing và debugging
- AWS SAM là extension của AWS CloudFormation, có thêm các chức năng dành riêng cho server less
- Best practices: Các template của SAM có kèm sẵn các best practices: lifecycle của ứng dụng, safe deployment, rollback,…

Nhược điểm:

- API Gateway configuration: Bị giới hạn khi config với API Gateway
- Ít plugin từ community

### Xây dựng Serverless Application với AWS SAM

1. Cài đặt SAM CLI
2. Tải sample AWS SAM Application
3. Phát triển ứng dụng:  viết code, dùng `sam build` command để build ứng dụng
4. Deploy:
    - Phần deployment được cấu hình bên trong một file YAML, cú pháp tương tự với template của CloudFormation,
    - Bất cứ resource nào có thể khai báo trong CloudFormation, đều có thể khai báo trong AWS SAM template.
    - “Transform” header dùng để chỉ ra đó là một SAM template: `Transform: ‘AWS::Serverless-2016-10-31’`
    - Resource types:
        - AWS::Serverless::Function (AWS Lambda)
        - AWS::Serverless::Api (API Gateway)
        - AWS::Serverless::SimpleTable (DynamoDB)
        - AWS::Serverless::Application (AWS Serverless Application Repository)
        - AWS::Serverless::HttpApi (API Gateway HTTP API)
        - AWS::Serverless::LayerVersion (Lambda layers)
    - Để deploy lên AWS, chỉ cần dùng hai câu lệnh sau:
        
        ```yaml
        sam package
        sam deploy
        # Alternative
        aws cloudformation package
        aws cloudformation deploy
        ```
        
    - SAM Policy Templates là một list các template dùng để grant permission cho Lambda functions:
        - S3ReadPolicy
        - SQSPollerPolicy
        - DynamoDBCrudPolicy
        - etc
5. Test ứng dụng
    - local: `sam local`
    - aws: invoke lambda function thủ công, hoặc tạo event trong lambda console

### Serverless Application Repository

Như github, nhưng là cho server less application

Nguồn: [AWS Serverless Application Model (AWS SAM) Cheat Sheet | AWS Cheat Sheet (digitalcloud.training)](https://digitalcloud.training/aws-sam/)
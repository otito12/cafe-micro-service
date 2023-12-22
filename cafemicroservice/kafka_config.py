from kafka import KafkaProducer

# Kafka Producer configuration
producer_config = {
    'bootstrap_servers': 'stirred-sunbeam-8799-us1-kafka.upstash.io:9092',
    'sasl_mechanism': 'SCRAM-SHA-256',
    'security_protocol': 'SASL_SSL',
    'sasl_plain_username': 'c3RpcnJlZC1zdW5iZWFtLTg3OTkkEGUSdkxcf7dABHa_g34lqAUqtug_P3u2Qtk',
    'sasl_plain_password': 'NTg0NWEwYWUtZmU4NS00ZjcxLWEwOTMtMzg2ZDczMDBkYjRk',
}

# Create a standard Kafka Producer
producer = KafkaProducer(bootstrap_servers=producer_config['bootstrap_servers'],
                         sasl_mechanism=producer_config['sasl_mechanism'],
                         security_protocol=producer_config['security_protocol'],
                         sasl_plain_username=producer_config['sasl_plain_username'],
                         sasl_plain_password=producer_config['sasl_plain_password'])

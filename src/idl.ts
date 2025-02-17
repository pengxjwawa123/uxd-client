import type { Idl } from '@project-serum/anchor/dist/cjs/idl';

export const IDL: Idl = {
  version: '3.0.2',
  name: 'uxd',
  instructions: [
    {
      name: 'initializeController',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableMintDecimals',
          type: 'u8',
        },
      ],
    },
    {
      name: 'setRedeemableGlobalSupplyCap',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableGlobalSupplyCap',
          type: 'u128',
        },
      ],
    },
    {
      name: 'setMangoDepositoriesRedeemableSoftCap',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableSoftCap',
          type: 'u64',
        },
      ],
    },
    {
      name: 'registerMangoDepository',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depositoryMangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'depositInsuranceToMangoDepository',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorityQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositoryMangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawInsuranceFromMangoDepository',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'authorityQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositoryMangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'rebalanceMangoDepositoryLite',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositoryMangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBankQuote',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBankQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVaultQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoRootBankCollateral',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBankCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVaultCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'maxRebalancingAmount',
          type: 'u64',
        },
        {
          name: 'polarity',
          type: {
            defined: 'PnlPolarity',
          },
        },
        {
          name: 'slippage',
          type: 'u32',
        },
      ],
    },
    {
      name: 'mintWithMangoDepository',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemable',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositoryMangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'collateralAmount',
          type: 'u64',
        },
        {
          name: 'slippage',
          type: 'u32',
        },
      ],
    },
    {
      name: 'redeemFromMangoDepository',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemable',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositoryMangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableAmount',
          type: 'u64',
        },
        {
          name: 'slippage',
          type: 'u32',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'controller',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'redeemableMintBump',
            type: 'u8',
          },
          {
            name: 'version',
            type: 'u8',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'redeemableMint',
            type: 'publicKey',
          },
          {
            name: 'redeemableMintDecimals',
            type: 'u8',
          },
          {
            name: 'registeredMangoDepositories',
            type: {
              array: ['publicKey', 8],
            },
          },
          {
            name: 'registeredMangoDepositoriesCount',
            type: 'u8',
          },
          {
            name: 'redeemableGlobalSupplyCap',
            type: 'u128',
          },
          {
            name: 'mangoDepositoriesRedeemableSoftCap',
            type: 'u64',
          },
          {
            name: 'redeemableCirculatingSupply',
            type: 'u128',
          },
        ],
      },
    },
    {
      name: 'mangoDepository',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'unused',
            type: {
              array: ['u8', 2],
            },
          },
          {
            name: 'mangoAccountBump',
            type: 'u8',
          },
          {
            name: 'version',
            type: 'u8',
          },
          {
            name: 'collateralMint',
            type: 'publicKey',
          },
          {
            name: 'collateralMintDecimals',
            type: 'u8',
          },
          {
            name: 'unused2',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'quoteMint',
            type: 'publicKey',
          },
          {
            name: 'unused3',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'quoteMintDecimals',
            type: 'u8',
          },
          {
            name: 'mangoAccount',
            type: 'publicKey',
          },
          {
            name: 'controller',
            type: 'publicKey',
          },
          {
            name: 'insuranceAmountDeposited',
            type: 'u128',
          },
          {
            name: 'collateralAmountDeposited',
            type: 'u128',
          },
          {
            name: 'redeemableAmountUnderManagement',
            type: 'u128',
          },
          {
            name: 'totalAmountPaidTakerFee',
            type: 'u128',
          },
          {
            name: 'totalAmountRebalanced',
            type: 'u128',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'SourceFileId',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'InstructionInitializeController',
          },
          {
            name: 'InstructionSetRedeemableGlobalSupplyCap',
          },
          {
            name: 'InstructionSetMangoDepositoriesRedeemableSoftCap',
          },
          {
            name: 'InstructionRegisterMangoDepository',
          },
          {
            name: 'InstructionMangoDexMintWithMangoDepository',
          },
          {
            name: 'InstructionMangoDexRedeemFromMangoDepository',
          },
          {
            name: 'InstructionMangoDexDepositInsuranceToMangoDepository',
          },
          {
            name: 'InstructionMangoDexWithdrawInsuranceFromMangoDepository',
          },
          {
            name: 'MangoProgramAnchorMango',
          },
          {
            name: 'MangoProgramDeposit',
          },
          {
            name: 'MangoProgramInitMangoAccount',
          },
          {
            name: 'MangoProgramPlacePerpOrder',
          },
          {
            name: 'MangoProgramWithdraw',
          },
          {
            name: 'MangoUtilsLimitUtils',
          },
          {
            name: 'MangoUtilsOrderDelta',
          },
          {
            name: 'MangoUtilsOrder',
          },
          {
            name: 'MangoUtilsPerpAccountUtils',
          },
          {
            name: 'MangoUtilsPerpInfo',
          },
          {
            name: 'StateController',
          },
          {
            name: 'StateMangoDepository',
          },
          {
            name: 'Error',
          },
          {
            name: 'Lib',
          },
          {
            name: 'InstructionMangoDexRebalanceMangoDepositoryLite',
          },
          {
            name: 'InstructionMangoDexMigrateMangoDepositoryToV2',
          },
        ],
      },
    },
    {
      name: 'UxdError',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'ProgramError',
            fields: [
              {
                defined: 'ProgramError',
              },
            ],
          },
          {
            name: 'UxdErrorCode',
            fields: [
              {
                name: 'uxd_error_code',
                type: {
                  defined: 'UxdErrorCode',
                },
              },
              {
                name: 'line',
                type: 'u32',
              },
              {
                name: 'source_file_id',
                type: {
                  defined: 'SourceFileId',
                },
              },
            ],
          },
        ],
      },
    },
    {
      name: 'UxdErrorCode',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'InvalidRedeemableMintDecimals',
          },
          {
            name: 'InvalidRedeemableGlobalSupplyCap',
          },
          {
            name: 'RootBankIndexNotFound',
          },
          {
            name: 'InvalidSlippage',
          },
          {
            name: 'EffectiveOrderPriceBeyondLimitPrice',
          },
          {
            name: 'InvalidCollateralAmount',
          },
          {
            name: 'InsufficientCollateralAmount',
          },
          {
            name: 'InvalidRedeemableAmount',
          },
          {
            name: 'InsufficientRedeemableAmount',
          },
          {
            name: 'PerpOrderPartiallyFilled',
          },
          {
            name: 'RedeemableGlobalSupplyCapReached',
          },
          {
            name: 'MangoDepositoriesSoftCapOverflow',
          },
          {
            name: 'MaxNumberOfMangoDepositoriesRegisteredReached',
          },
          {
            name: 'InvalidInsuranceAmount',
          },
          {
            name: 'InsufficientAuthorityInsuranceAmount',
          },
          {
            name: 'InvalidRebalancedAmount',
          },
          {
            name: 'InsufficientOrderBookDepth',
          },
          {
            name: 'InvalidExecutedOrderSize',
          },
          {
            name: 'MangoPerpMarketIndexNotFound',
          },
          {
            name: 'InvalidMangoDepositoriesRedeemableSoftCap',
          },
          {
            name: 'InvalidQuoteDelta',
          },
          {
            name: 'InvalidOrderDirection',
          },
          {
            name: 'MathError',
          },
          {
            name: 'SlippageReached',
          },
          {
            name: 'InvalidRebalancingAmount',
          },
          {
            name: 'InsufficientQuoteAmount',
          },
          {
            name: 'InvalidPnlPolarity',
          },
          {
            name: 'RebalancingError',
          },
          {
            name: 'BumpError',
          },
          {
            name: 'OrderSizeBelowMinLotSize',
          },
          {
            name: 'InvalidCollateralDelta',
          },
          {
            name: 'Default',
          },
        ],
      },
    },
    {
      name: 'AccountingEvent',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Deposit',
          },
          {
            name: 'Withdraw',
          },
        ],
      },
    },
    {
      name: 'PnlPolarity',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Positive',
          },
          {
            name: 'Negative',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'InitializeControllerEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'authority',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'SetRedeemableGlobalSupplyCapEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableGlobalSupplyCap',
          type: 'u128',
          index: false,
        },
      ],
    },
    {
      name: 'RegisterMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'collateralMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mangoAccount',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'RegisterMangoDepositoryEventV2',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositoryVersion',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'collateralMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mangoAccount',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'SetMangoDepositoryRedeemableSoftCapEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'redeemableSoftCap',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'DepositInsuranceToMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositedAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'DepositInsuranceToMangoDepositoryEventV2',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositedAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'WithdrawInsuranceFromMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'withdrawnAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'WithdrawInsuranceFromMangoDepositoryEventV2',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'withdrawnAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'MintWithMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'collateralAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'slippage',
          type: 'u32',
          index: false,
        },
        {
          name: 'collateralDelta',
          type: 'u64',
          index: false,
        },
        {
          name: 'redeemableDelta',
          type: 'u64',
          index: false,
        },
        {
          name: 'feeDelta',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'RedeemFromMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'slippage',
          type: 'u32',
          index: false,
        },
        {
          name: 'collateralDelta',
          type: 'u64',
          index: false,
        },
        {
          name: 'redeemableDelta',
          type: 'u64',
          index: false,
        },
        {
          name: 'feeDelta',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'RebalanceMangoDepositoryLiteEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositoryVersion',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'polarity',
          type: {
            defined: 'PnlPolarity',
          },
          index: false,
        },
        {
          name: 'rebalancingAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'rebalancedAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'slippage',
          type: 'u32',
          index: false,
        },
        {
          name: 'collateralDelta',
          type: 'u64',
          index: false,
        },
        {
          name: 'quoteDelta',
          type: 'u64',
          index: false,
        },
        {
          name: 'feeDelta',
          type: 'u64',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidAuthority',
      msg: 'Only the Program initializer authority can access this instructions.',
    },
    {
      code: 6001,
      name: 'InvalidController',
      msg: "The Depository's controller doesn't match the provided Controller.",
    },
    {
      code: 6002,
      name: 'InvalidDepository',
      msg: 'The Depository provided is not registered with the Controller.',
    },
    {
      code: 6003,
      name: 'InvalidCollateralMint',
      msg: "The provided collateral mint does not match the depository's collateral mint.",
    },
    {
      code: 6004,
      name: 'InvalidQuoteMint',
      msg: "The provided quote mint does not match the depository's quote mint.",
    },
    {
      code: 6005,
      name: 'InvalidAuthorityQuoteATAMint',
      msg: "The authority's Quote ATA's mint does not match the Depository's one.",
    },
    {
      code: 6006,
      name: 'InvalidMangoAccount',
      msg: "The Mango Account isn't the Depository one.",
    },
    {
      code: 6007,
      name: 'InvalidRedeemableMint',
      msg: "The Redeemable Mint provided does not match the Controller's one.",
    },
    {
      code: 6008,
      name: 'UnsupportedDepositoryVersion',
      msg: "The instruction doesn't support this version of the Depository. Migrate first.",
    },
  ],
};
